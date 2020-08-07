import React,{useState,useEffect} from 'react';
import { StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard ,
    ScrollView
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

const renderInputs = ()=>{
  const [initialValues,setInitialVales]=useState({
    phone:'',
    amount:''
  })
    return(
    <Form style={{marginTop:5}}>
    <TextInput style={defaultStyle.InputText1Style}
      label="Phone number"
      value={initialValues.phone}
      mode='outlined'
      keyboardType="numeric"
      onChangeText={text => setInitialVales({...initialValues,phone:text})}
      underlineColor='transparent'
      underlineColorAndroid={'rgba(0,0,0,0)'}
      text='white'
      direction='rtl'
      theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
    />

      <TextInput
      label="Amount"
      value={initialValues.amount}
      style={defaultStyle.InputText1Style}
      mode='outlined'
      keyboardType="numeric"
      onChangeText={text => setInitialVales({...initialValues,amount:text})}
      underlineColor='transparent'
      underlineColorAndroid={'rgba(0,0,0,0)'}
      text='white'
      direction='rtl'
      theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}

    />
   
   <View style={defaultStyle.container}>
      <Button 
      style={defaultStyle.button1}>
         <Text>Cancel</Text>
         </Button>
      <Button disabled={initialValues.phone!=='' && initialValues.amount!==''?false:true}
      onPress={()=>console.log("hna ha",initialValues)}
      style={initialValues.phone!=='' && initialValues.amount!==''?defaultStyle.buttonactive:defaultStyle.button2}>
         <Text  style={{color:'#ffff'}}>Recargas</Text>
         </Button>
    </View>

</Form>
  )
  
}

const CategoriesScreen = ({activeBalance, navigation }) =>  {
  const [storageData,setStorageData]=useState({})
  const dispatch = useDispatch();

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

  return (
    <KeyboardAvoidingView
     behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}>
      
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

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
          Recargas Móviles
          </Text>
        </View>
        <RecargasType/>
        <View style={styles.paymentContent}>
          <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
          Choose Provider:   
          </Text>
          <Text style={{color:'red',fontWeight:'bold'}}>
           Claro
          </Text>
        </View>
        <ProductType/>
       
        {renderInputs()}


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
    // justifyContent: 'center',
    // backgroundColor:'#ffff'
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
    padding:20,
    
  },
  buttonContainer: {
   
    backgroundColor:'red',
    width:'80%',
    alignSelf: 'center',
    flexDirection:'row',
    borderRadius:20
  },
  btn:{
    marginHorizontal:10

  },
  paymentText:{
    fontWeight:"bold",
  },
  // paymentIcons:{
  //   flexDirection:'row'
  // }
});

const defaultStyle = StyleSheet.create({
  InputText1Style: {
      backgroundColor: '#fff',
      // paddingBottom:20,
      shadowColor: '#000',
      shadowOpacity: 0.4,
      elevation: 2,
      // position: 'relative',
      height:39,
      width:345,
      marginBottom:20
      // marginLeft:5
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button2: {
    // backgroundColor:'red',
    backgroundColor:'rgb(103 ,103 ,103)',

    borderRadius:10,
    width: '40%',
    // height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonactive:{
    backgroundColor:'red',

    borderRadius:10,
    width: '40%',
    // height: 40,
    justifyContent:'center',
    alignItems:'center'

  },
  button1: {
    backgroundColor:'#ffff',
    borderWidth:1,
    borderColor:'#0000',
    borderRadius:10,
    width: '40%',
    justifyContent:'center',
    alignItems:'center'
  }
})

const mapStateToProps = ({balance}) => ({
  activeBalance:balance.activeBalance
    
})


export default connect(mapStateToProps,null)(CategoriesScreen);
