import React,{ useEffect, } from 'react';
import { StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard ,
    Image
  } from 'react-native';
import { Button, Container,Content,} from 'native-base';
import { useDispatch } from 'react-redux';
import * as FacturasActions from '../../store/actions/Facturas';
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import {connect} from 'react-redux';
import ProductType from '../../components/UI/Facturas/provider'
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import {isEmpty} from 'lodash'
import InputsField from './pegoInput'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Pego = ({ activeProvider,navigation }) =>  {
 
  const dispatch = useDispatch();

  useEffect(() => {

    return  ()=> {
       dispatch(FacturasActions.clearCash())
      }
  }, []);

  const activeImage =()=>{
    if(!isEmpty(activeProvider)){
      return <Image source={beactiveImg}/> 
    }
    else {
      return <Image source={beImg}/>
    }
  }



  return (

      
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <Container >

    <Content style={{flex:1}}>
   
      <View style={styles.Contentcontainer}>
        <CustomTapsBalance/>

        <View style={styles.btnContent}>
            <TouchableOpacity style={styles.btn}>
            <Icon name="search" size={20} color="#ffff" />

                <Text style={styles.btntext}>
                Escanear Código
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCam}>
            <Icon name="camera" size={20} color="#ffff" />

                <Text style={styles.btntext}>
                Escanear Código
                </Text>
            </TouchableOpacity>
        </View>
  
        <View style={styles.paymentContent}>
          {activeImage()}
          <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
          Seleccionar Servicio :      
          </Text>
          {
            activeProvider?.name && <Text style={{color:'rgb(44,209,158)',fontWeight:'bold'}}>
            {activeProvider.name}
           </Text>
          }
          
          
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>

          </View>
        <InputsField navigation={navigation} />

       


        </View>
    </Content>
  </Container>
  </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
  },

  test:{
    backgroundColor: 'rgb(216,216, 216)',
    
  },
 
  Contentcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
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
  paymentContent:{
    flexDirection: 'row',
    width: "100%",
    justifyContent:'flex-start',
    paddingHorizontal:20,
    marginTop:20,
    alignItems:'center'
    
     
  },

  paymentText:{
    fontWeight:"bold",
    marginLeft:5
  },
  btnContent:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      marginVertical:20,      
  },
  btn:{
      backgroundColor:'rgb(44,209,158)',
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'row',
      padding:8,
      borderRadius:5,
      marginHorizontal:8

  },
  btntext :{
      color:'#ffff',
      marginHorizontal:7,
      fontSize:12
  },
  btnCam:{
    backgroundColor:'black',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    padding:8,
    borderRadius:5,
    marginHorizontal:8
  }
 
});



const mapStateToProps = ({balance,Facturas}) => ({
  activeBalance:balance.activeBalance,
  activeProvider : Facturas.activeProvider,
    
})


export default connect(mapStateToProps,null)(Pego);


