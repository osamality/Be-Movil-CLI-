import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard  
} from 'react-native';
// import SegmentedControlTab from "react-native-segmented-control-tab";
import { Formik } from 'formik';

import { Container,Form, Content,Text} from 'native-base';
import {TextInput} from 'react-native-paper'

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import Logo1 from '../../assets/Images/Group5216.png'
import Logo2 from '../../assets/Images/Group5032.png'

const SignIn = ({navigation}) =>  {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues,setInitialVales]=useState({
    email:'',
    password:''
  })
  const [selected, setSelected] = useState(0);


  const dispatch = useDispatch();

  
  const authHandler = async () => {
    console.log("click")
    let action;
  
      action = authActions.login("ahmed","Ahmed2hamdi");
      setError(null);
      setIsLoading(true);
      
  
    try {
      await dispatch(action);
    }
     catch (err) {
      setError('Invalid Credentials')
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

 const setPass = (text)=>{
   setInitialVales({
     ...initialValues,
     password:text
   })
 }

 const setEmail =(text)=>{
   setInitialVales({
     ...initialValues,
     email:text
   })
 }
 
  return (
      
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
  > 
    <>
  <View style={{margin:20}}></View>
     <View style={styles.imageContainer}>
           <Image  style={styles.Logo1}
              source={Logo1}
            />
           <Image  style={styles.Logo2}
              source={Logo2}
           />
      </View>
    <View style={{margin:15}}></View>

    <Container style={{justifyContent:'center',alignItems:'center'}}>
        <Content>
        {/* <ScrollView> */}
          <Form>
            <TextInput
              label="Email"
              value={initialValues.email}
               style={defaultStyle.InputText1Style}
              mode='outlined'
              onChangeText={text => setEmail(text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}

            />
           
            <TextInput style={defaultStyle.InputText1Style}
              label="Password"
              value={initialValues.password}
              mode='outlined'
              secureTextEntry={true}
              // keyboardType="numeric"
              onChangeText={text => setPass(text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
            />
           
        <View style={styles.inputContainerText}>
          <Text style={{textDecorationLine: 'underline'}} onPress={()=>navigation.navigate('ResetPass')}>
             Olvide Contraseña ?
          </Text>
        </View>
    <View style={styles.buttonContainer}>
       {isLoading ? (
         <ActivityIndicator size="small" color={Colors.primary} />
       ) : (
         <Button
           color='rgb(103 ,103 ,103)'
           style={styles.btn}
           title= 'Login'
          onPress={authHandler}
         />
       )}

      </View>
  
      </Form>
            {/* </ScrollView> */}
     </Content>
  </Container>

 
  </>
</KeyboardAvoidingView>
</TouchableWithoutFeedback>
  


  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#ffff'
  },

  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' ,
    // maxHeight:'70%'
   },
  imageContainer:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center',
    // height:30,
    
  },
  Logo1:{
    marginBottom:10,
  },
  Logo2:{
    marginBottom:20

  },
  UserContainer:{
    flex:1,
    marginTop:40,
    marginBottom:40
  },
  buttonContainer: {
    // justifyContent:'center',
    // alignItems:'center',
    // flex:1,
    backgroundColor:'red',
    marginTop: 30,
    width:'80%',
    alignSelf: 'center',

    // marginBottom:30,
    // width:300,
    // marginLeft:5
    // flexDirection:'row',
    // justifyContent:'center',
    // alignItems:'center',
 

  },
  btn:{
    
    // width:300,
    // justifyContent:'center',
    // alignItems:'center',
    // paddingHorizontal:30
    // color:'rgb(103 ,103 ,103)',
    // marginTop:20
  },
 
  inputContainerText:{
  flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    // paddingTop:5,
    // marginTop:2.5,
    // marginBottom:15,
    // marginRight:10
  }


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
  }
})


export default SignIn;
