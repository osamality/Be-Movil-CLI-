import React,{useState,useEffect,useRef } from 'react';
import { StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard ,
    Image
  } from 'react-native';
import { Container,Content,Form,Button } from 'native-base';
import { useDispatch } from 'react-redux';
import * as BilleterasActions from '../../store/actions/billeteras';
import * as ProductActions from '../../store/actions/product';

import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import {connect} from 'react-redux';
import TapOptions from '../../components/UI/Billeteras/typeTap'
import ProductType from '../../components/UI/Billeteras/provider'
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import {isEmpty} from 'lodash'
import InputsFields from './inputs'


const Billeteras = ({ activeProvider,navigation, nameOfType }) =>  {
 
  const dispatch = useDispatch();
  const refRBSheet = useRef();


  useEffect(() => {

    return  ()=> {
       dispatch(BilleterasActions.clearCash())
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
  
       
        <TapOptions/>
        <View style={styles.paymentContent}>
          {activeImage()}
          <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
          Realizar {nameOfType} :    
          </Text>
          {
            activeProvider?.name && <Text style={{color:'rgb(44,209,158)',fontWeight:'bold'}}>
            {activeProvider.name}
           </Text>
          }
          
          
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>

          </View>
        <ProductType/>
        <InputsFields navigation={navigation} />

       


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
 
});



const mapStateToProps = ({balance,billeteras,recargas}) => ({
  activeBalance:balance.activeBalance,
  activeProvider : billeteras.activeProvider,
  nameOfType : billeteras.activeType
    
})


export default connect(mapStateToProps,null)(Billeteras);


