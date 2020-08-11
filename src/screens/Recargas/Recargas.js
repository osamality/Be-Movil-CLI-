import React,{useState,useEffect,useRef } from 'react';
import { StyleSheet,
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard ,
    Image
  } from 'react-native';
import { Container,Content,Form,Button } from 'native-base';
import { useDispatch } from 'react-redux';
import * as BalanceActions from '../../store/actions/balance';
import axios from 'axios';
import {SERVER_URL} from '../../config/config';
import { AsyncStorage } from 'react-native';
import CustomTapsBalance from '../../components/UI/customTapsBalance';
import {connect} from 'react-redux';
import RecargasType from '../../components/UI/recargasType'
import ProductType from '../../components/UI/productType'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native-paper'
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import {isEmpty} from 'lodash'
import RBSheet from "react-native-raw-bottom-sheet";
import RecargasChangeType from './RecargasChangeType'


const CategoriesScreen = ({ activeProvider,navigation }) =>  {
 
  const dispatch = useDispatch();
  const refRBSheet = useRef();


  useEffect(() => {

   const fetchProduct= async ()=>{

     const userData = await AsyncStorage.getItem('token');
     if(userData){
       const transferData=JSON.parse(userData)
       const {token}= transferData
       const acctualToken =`Token ${token}`

     axios.get(
      `${SERVER_URL}/api/reportes/saldo/`,
      { headers: {authorization :acctualToken }})
      .then((response)=>{
       const action = BalanceActions.saveBalance(response.data);
       dispatch(action)

      })
      .catch((err)=>{
        console.log(err,'err')

      })
    }
   


}
fetchProduct();
    
  }, []);

  const activeImage =()=>{
    console.log(activeProvider)
    if(!isEmpty(activeProvider)){
      return <Image source={beactiveImg}/> 
    }
    else {
      return <Image source={beImg}/>
    }
  }



  return (
    <KeyboardAvoidingView
     behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}>
      
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <Container >

    <Content style={{flex:1}}>
   
      <View style={styles.Contentcontainer}>
        <CustomTapsBalance/>
  
       
        <RecargasType/>
        <View style={styles.paymentContent}>
          {activeImage()}
          <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
          Choose Provider:   
          </Text>
          {
            activeProvider.name && <Text style={{color:'rgb(44,209,158)',fontWeight:'bold'}}>
            {activeProvider.name}
           </Text>
          }
          
          
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>

          </View>
        <ProductType/>
        <RecargasChangeType navigation={navigation} />

       


        </View>
    </Content>
  </Container>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>

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



const mapStateToProps = ({balance,product,recargas}) => ({
  activeBalance:balance.activeBalance,
  activeProvider : product.activeProvider,
  RecargasActiveType : recargas.activeType
    
})


export default connect(mapStateToProps,null)(CategoriesScreen);
