import React,{useState,useEffect} from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,  TouchableWithoutFeedback, 
    Keyboard ,} from 'react-native';
// import {data} from './TestData'
import * as balanceActions from '../../../store/actions/balance';
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux';
import {map} from 'lodash'
import {isEmpty} from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import {TextInput} from 'react-native-paper'
import { Button } from 'native-base';
import {Picker} from '@react-native-picker/picker';


import DropDownPicker from 'react-native-dropdown-picker';

const RenderText = ({data,resetCount})=>{
    const [index,setIndex]=useState("SS");
    const dispatch = useDispatch();

    useEffect(() => {
   
        dispatch( balanceActions.saveActiveBalance(data.SS))
        
            
    }, []);

    const setStatus = async(index,balance)=>{
        resetCount();
        const action = balanceActions.saveActiveBalance(balance)
        setIndex(index);
        try{
            await dispatch(action)
        }
        catch{
            console.log("Falied Balnace")
        }
    }

    return map(data,(d,v)=>{
        return (
            <TouchableOpacity  key={v} 
             style={index==v? styles.contentActive:styles.content}
             onPress={()=>setStatus(v,d)}

            >
                <Text  style={v==index? styles.Textbold:styles.Text}> {v=="SS"? "Recargas ": v=="ST"? "Mi Caja" :"Mi Ahorro"} </Text>
                <Text  style={v==index?styles.activeText:styles.normalText}> {v==index? 'Active':d} </Text>
            </TouchableOpacity >

        )
    })

}

class CustomTapsBalance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count:0 ,
          toggleModel :false,
          Valor: '',
          activeOption : "Mi Caja",
          activeOptionBalance : props.balance?.ST,
        }
    }
    
      componentDidMount () {
        this.timer()
        
       
     }
     
      timer = () => {
        this.interval = setInterval(() => {
          this.setState(prevState => ({
            count: prevState.count + 1,
          }), () => {
            if (this.state.count === 100) {
                clearInterval(this.interval);
            }
          });
        },60)
      }
      resetCount = ()=>{
          this.setState({
              count:0
          })
          this.timer()
      }
   handlePress = async (item)=>{
       this.setState({
           toggleModel : !this.state.toggleModel
       })
   

    // dispatch(DigitalActions.saveActivePackage(item))
    // setToggleModal(false)
  }
  setSelect = (value)=>{
      if(value == "Mi Caja"){
      this.setState({
        activeOption : value,
        activeOptionBalance : this.props.balance?.ST
      })
    }
    else {
        this.setState({
            activeOption : value,
            activeOptionBalance : this.props.balance?.SP
          })
    }
  }

  

    render(){
        const {activeBalance,balance}=this.props;
        return(
            <>
            <View style={styles.Contentcontainer}>
                 {!isEmpty(balance)&&<RenderText data ={balance} resetCount={this.resetCount}/>}
             </View> 
           <View style={styles.TextContent}>
                 <Text style={{textAlign:'center',marginTop:7,...styles.Text}}>
                     Balance
                  </Text>
                <Text style={{fontWeight:'bold',textAlign:'center',marginTop:7}}>
                  {this.state.count} COP
                 </Text>
              <TouchableOpacity onPress={()=>this.setState({...this.state,toggleModel:true})}>
                 <Icon name="external-link-alt" size={15} color="black" />
              </TouchableOpacity>
             
           </View>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <Modal width={380} height={500} visible={this.state.toggleModel} modalAnimation={new SlideAnimation({slideFrom: 'top',})}
            modalTitle={
            <View style={styles.titleModal}>
                <Text style={styles.title}>Movimientos entre Bolsas</Text>
                <Text style={styles.closeBtn} onPress={()=>this.setState({...this.state,toggleModel: false})}> X</Text>
                </View>
            }>
            <ModalContent >
                    
                    <View style={styles.wraper}>
                        <Text style={styles.TitleText}>
                        Enviar desde:
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',width:'100%',height:60,marginVertical:20}}>
                        <View style={styles.select}>

                        <Picker
                        selectedValue={this.state.activeOption}
                         mode="dropdown"
                        style={{height: 50, width: '100%'}}
                        onValueChange={(itemValue, itemIndex) =>
                       this.setSelect(itemValue)
                        }>
                       <Picker.Item label="Mi Caja" value="Mi Caja" />
                        <Picker.Item label="Mi Ahorro" value="Mi Ahorro" />
                       </Picker>
                        </View>
                       
                        <View style={styles.balanceWrapper}>
                            <Text style={{color:'rgb(44,209,158)'}}>
                                Balance
                            </Text>
                            <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>
                                {this.state.activeOptionBalance} COP
                            </Text>
                        </View>
                    </View>
                    <View  style={styles.wraper}>
                        <Text  style={styles.TitleText}>Depositar en:</Text>
                    </View>
                    <View  style={{flexDirection:'row',justifyContent:'center',alignContent:'center',width:'100%',height:60,marginVertical:20}}>
                        <View  style={styles.selectGreen}>
                            <Text style={{color:'#ffff',textAlign:'center'}}>
                            Recargas
                            </Text>
                        </View>
                        <View style={{...styles.balanceWrapper,backgroundColor:'rgb(44,209,158)'}}>
                            <Text style={{color:'#ffff',textAlign:'right'}}>
                                Balance
                            </Text>
                            <Text style={{fontWeight:'bold',fontSize:18,color:'#ffff',textAlign:'right'}}>
                               {this.props.balance?.SS} COP
                            </Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                        <Text style={{fontSize:15,color:'black',textAlign:'center'}}>
                        Enviar monto desde Recargas a Mi Caja 
                        </Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                    <TextInput
                      label="Valor"
                      value={this.state.Valor}
                      style={styles.InputText1Style}
                      mode='outlined'
                      keyboardType="numeric"
                      onChangeText={text =>  this.setState({Valor : text })}
                      underlineColor='transparent'
                      underlineColorAndroid={'rgba(0,0,0,0)'}
                      text='white'
                      direction='rtl'
                      theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
                      editable={true}
                     />           
                    </View>
             <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
            
              <Button 
              onPress={() => this.setState({toggleModel:false})}
              style={styles.btn}>
                 <Text  style={{color:'#ffff'}}>Transferir</Text>
                 </Button>
            </View>
                

                </ModalContent>
            </Modal>
                </TouchableWithoutFeedback>
            </>

        );
    }
}

const styles = StyleSheet.create({
    selectGreen:{
        backgroundColor:"rgb(44,209,158)",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        textAlign:'center',
        width:'40%',height:'100%',
        borderRightWidth:1,
        borderRightColor:'(rgb(230,230,230)',
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        padding:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',

    },

    select :{
        backgroundColor:"#ffff",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        textAlign:'center',
        width:'40%',height:'100%',
        borderRightWidth:1,
        borderRightColor:'(rgb(230,230,230)',
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        padding:10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'center',

    },
    balanceWrapper:{
        
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        padding:10,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems:'center',
        width: '60%',
        height:'100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 6,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        textAlign:'center',
    },
    TitleText:{
        fontSize: 15,
        color:"black",
        textAlign : 'left',
        fontWeight :'bold'
    },
    wraper:{
        flex:1,
        margin : 10,
        width : '90%'

    },
    btn:{
        backgroundColor:'red',
        width:'100%',
        borderRadius:5,
        // width: '80%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:2
  
    
      },
    InputText1Style: {
        backgroundColor: '#fff',
        // paddingBottom:20,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        elevation: 2,
        // position: 'relative',
        height:45,
        width:'100%',
        marginVertical:20
        // marginLeft:5
    },
    titleModal:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(235,6,42)',
        height:50
    },
    closeBtn:{
        color:'#ffff',
        textAlign:'left',
        width:'8%',
        fontWeight:'bold',
        fontSize:16
        
    },
    title:{
        color:'#ffff',
        textAlign:'center',
        width:'92%',
        fontSize:18
    },

    Contentcontainer:{
        flex:1,
        flexDirection:'row',
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '90%',
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign:'center',
       

    },
    content:{
        flex:1,
        flexDirection:'column',
        paddingVertical:8,
    },
    contentActive:{
        flex:1,
        flexDirection:'column',
        paddingVertical:8,
        borderBottomWidth :2,
        borderBottomColor: 'rgb(235,6,42)'   
        // backgroundColor:'red',

    },
    Text:{
       fontSize:12,
       textAlign:'center',
       color:'rgb(145,145,145)'
    },
    Textbold:{
        fontSize:12,
       textAlign:'center',
       color:'black',
       fontWeight:'bold'

    },
    activeText:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center',
        color:'rgb(235,6,42)'
    },
    normalText:{
        fontSize:12,
        textAlign:'center',
        color:'rgb(145,145,145)'
    },

    TextContent:{
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        width: '90%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        textAlign:'center'
    
      },

  });

const mapStateToProps = ({balance}) => ({
    activeBalance:balance.activeBalance,
    balance:balance.balance

      
  })

export default connect(mapStateToProps,null) (CustomTapsBalance)
