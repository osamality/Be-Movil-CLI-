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

const renderInputs = (initialValues,setInitialVales,refRBSheet,activeProvider)=>{

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
   
   <View style={{justifyContent:'space-around',flexDirection:'row'}}>
    
      <Button disabled={initialValues.phone!=='' && initialValues.amount!==''?false:true}
      onPress={()=>refRBSheet.current.open()}
      style={initialValues.phone!=='' && initialValues.amount!=='' && activeProvider.name?defaultStyle.buttonactive:defaultStyle.btn}>
         <Text  style={{color:'#ffff'}}>Recargas</Text>
         </Button>
    </View>

</Form>
  )
  
}

const CategoriesScreen = ({ activeProvider }) =>  {
  const [index,setindex]=useState(0)
  const [initialValues,setInitialVales]=useState({
    phone:'',
    amount:''
  })
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

  const activeImageInputs =()=>{
    if(initialValues.phone == '' || initialValues.amount == ''){
      return <Image source={beImg}/>
    }
    else {
      return <Image source={beactiveImg}/> 

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

        <View style={styles.paymentContent}>
          {activeImageInputs()}
          <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
          Escoje tu Operador:   
          </Text>
        </View>

        <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>

        </View>
       
        {renderInputs(initialValues,setInitialVales,refRBSheet,activeProvider)}
        <View>
        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={450}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
            borderRadius:50,
            justifyContent:'center',
            alignItems:'center',
            flex:1
          },
          container:{
            borderRadius:50,
            justifyContent:'center',
            // flex:1,
            alignItems:'center'

          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <ScrollView  showsHorizontalScrollIndicator={false}
>
        <View style={{alignItems:'center',flex:1}}>
        <Text  style={{fontWeight:'bold',fontSize:25}}>
        Confirmar Compra
        </Text>
        <Text  >
        Estas apunto de adquirir el paquete:
        </Text> 
        <Text style={{color:'rgb(235,6,42)'}}>
        Todo Incluido 30 Dias 

        </Text>
        <Text  style={{fontWeight:'bold',fontSize:25}}  >
        Realizar compra desde:       
         </Text>
         <View style={defaultStyle.container}>
      <View 
      style={defaultStyle.textTable}>
         <Text>Operador:</Text>
         </View>
      <View style={defaultStyle.textTable1}>
         <Text >{activeProvider.name}</Text>
         </View>
    </View>
    <View style={defaultStyle.container}>
      <View 
      style={defaultStyle.textTable}>
         <Text>Linea:</Text>
         </View>
      <View style={defaultStyle.textTable1}>
         <Text >{initialValues.phone}</Text>
         </View>
    </View>
    <View style={defaultStyle.container}>
      <View 
      style={defaultStyle.textTable}>
         <Text>Valor:</Text>
         </View>
      <View style={defaultStyle.textTable1}>
         <Text >{initialValues.amount}</Text>
         </View>
    </View>
        

          <View style={{justifyContent:'space-around',flexDirection:'row'}}>
      <Button 
      style={index==0?defaultStyle.button1:defaultStyle.button1active}
      onPress={()=>setindex(1)}
      >
         <Text>Mi Ahorro</Text>
         </Button>
      <Button
      onPress={()=>setindex(0)}
      style={index==1?defaultStyle.button1:defaultStyle.button1active}>
         <Text >Mi Caja</Text>
         </Button>
    </View>
    <View style={{justifyContent:'space-around',flexDirection:'row'}}>
    
    <Button 
    style={defaultStyle.accecptBtn}>
       <Text  style={{color:'#ffff'}}>Aceptar</Text>
       </Button>
  </View>
  <View style={{justifyContent:'space-around',flexDirection:'row'}}>
    
    <Button 
    style={defaultStyle.cancelBtn}>
       <Text  style={{color:'rgb(158,159,159)'}}>Cancel</Text>
       </Button>
  </View>
        </View>
        </ScrollView>
      </RBSheet>

        </View>


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
    marginLeft:5
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:10
  },

  btn: {
    backgroundColor:'rgb(103 ,103 ,103)',
    borderRadius:5,
    width: '80%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonactive:{
    backgroundColor:'red',

    borderRadius:5,
    width: '80%',
    justifyContent:'center',
    alignItems:'center'

  },
  textTable: {
    backgroundColor:'#ffff',
    borderWidth:1,
    borderColor:'#0000',
    width: '30%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'rgb(232,232,232)'
  },
  textTable1: {
    backgroundColor:'#ffff',
    borderWidth:1,
    borderColor:'#0000',
    width: '30%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderLeftWidth:0,
    borderColor:'rgb(232,232,232)'
  },
  button1: {
    backgroundColor:'#ffff',
    borderWidth:1,
    borderColor:'black',
    borderRadius:3,
    width: '30%',
    justifyContent:'center',
    alignItems:'center',
    margin:20
  },
  button1active:{
    backgroundColor:'rgb(44,209,158)',
    borderWidth:1,
    borderColor:'rgb(44,209,158)',
    borderRadius:3,
    width: '30%',
    justifyContent:'center',
    alignItems:'center',
    margin:20
  },
  accecptBtn:{
    margin:10,
    backgroundColor:'rgb(235,6,42)',
    borderRadius:5,
    width: '80%',
    justifyContent:'center',
    alignItems:'center'
  },
  cancelBtn:{
    backgroundColor:'#ffff',
    borderWidth:1,
    borderColor:'#0000',
    borderRadius:5,
    width: '80%',
    justifyContent:'center',
    alignItems:'center'

  }

})

const mapStateToProps = ({balance,product}) => ({
  activeBalance:balance.activeBalance,
  activeProvider : product.activeProvider
    
})


export default connect(mapStateToProps,null)(CategoriesScreen);
