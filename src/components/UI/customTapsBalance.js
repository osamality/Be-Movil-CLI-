import React,{useState,useEffect} from 'react'
import { View, StyleSheet,Text, TouchableOpacity , } from 'react-native';
import {Button} from 'native-base'
// import {data} from './TestData'
import * as balanceActions from '../../store/actions/balance';
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux';
import {map} from 'lodash'
import {isEmpty} from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome5';

const RenderText = ({data,resetCount})=>{
    const [index,setIndex]=useState("SS");
    const dispatch = useDispatch();

    useEffect(() => {
        const setDefaultBalnce= async()=>{
            
            const action = balanceActions.saveActiveBalance(data.SS)
            try{
                await dispatch(action)
            }
            catch{
                console.log("Falied Balnace")
            }
        
        }
        setDefaultBalnce();
            
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
          count:0 // An integer from father component
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
              <TouchableOpacity onPress={()=>console.log('icon')}>
                 <Icon name="external-link-alt" size={15} color="black" />
              </TouchableOpacity>
             
           </View>
            </>

        );
    }
}

const styles = StyleSheet.create({

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
