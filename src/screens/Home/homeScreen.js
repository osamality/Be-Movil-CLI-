import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import { Container, Header, Left, Body, Right,Content,Button } from 'native-base';
import Logo1 from '../../assets/Images/Group5134.png'
import { useDispatch } from 'react-redux';
import * as BalanceActions from '../../store/actions/balance';
import axios from 'axios';
import {SERVER_URL} from '../../config/config';
import { AsyncStorage } from 'react-native';
import CustomTaps from '../../components/UI/customTaps';
import {connect} from 'react-redux';
import PaymentType from '../../components/UI/paymentType';
import Products from '../../components/UI/Products'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomTapsBalance from '../../components/UI/customTapsBalance'

const CategoriesScreen = ({activeBalance, navigation }) =>  {
  const [storageData,setStorageData]=useState({})
  const dispatch = useDispatch();

  useEffect(() => {

   const fetchBalance= async ()=>{

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
fetchBalance();
    
  }, []);

  return (
    <Container >
 
    <Content style={{flex:1}}>
   
      <View style={styles.Contentcontainer}>
        <CustomTapsBalance/>
        {/* <CustomTaps/>
 
        <View style={styles.TextContent}>
          <Text style={{textAlign:'center',marginTop:7}}>
             Balance
          </Text>
          <Text style={{fontWeight:'bold',textAlign:'center',marginTop:7}}>
           {activeBalance} COP
          </Text>
          <TouchableOpacity onPress={()=>console.log('icon')}>
          <Icon name="external-link-alt" size={15} color="black" />
          </TouchableOpacity>
          </View> */}

        <View style={styles.paymentContent}>
          <Text style={styles.paymentText}>
            Payment Methods
          </Text>
        </View>
        <PaymentType/>
        <View style={styles.paymentContent}>
          <Text style={styles.paymentText}>
            Products
          </Text>
        </View>
        <Products navigation={navigation}/>

        {/* <View style={styles.paymentIcons}>
        <PaymentType/>
        </View> */}

        </View>
    </Content>
  </Container>
  );
}

const styles = StyleSheet.create({

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
    padding:20,
    
  },
  paymentText:{
    fontWeight:"bold",
  },
  // paymentIcons:{
  //   flexDirection:'row'
  // }
});

const mapStateToProps = ({balance}) => ({
  activeBalance:balance.activeBalance
    
})


export default connect(mapStateToProps,null)(CategoriesScreen);
