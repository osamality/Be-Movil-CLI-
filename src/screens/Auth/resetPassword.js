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

const ResetPass = props =>  {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
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


 
  return (
     
       
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
  > 
    <>
  <View style={{margin:10}}></View>
     <View style={styles.imageContainer}>
           <Image  style={styles.Logo1}
              source={Logo1}
            />
           <Image  style={styles.Logo2}
              source={Logo2}
           />
      </View>
    {/* <View style={{margin:15}}></View> */}

    <Container style={{justifyContent:'center',alignItems:'center'}}>
        <Content>
        
          <Form style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={styles.inputContainerText}>
          <Text style={{fontWeight:'bold'}}>
            Olvidaste tu Contraseña
          </Text>
        </View>
        <View style={styles.inputContainerTextSecond}>
          <Text style={{alignSelf:'center',textAlign:'center'}}>
          Enviaremos un Link a tu Correo Electrónico para restablecer tu Contraseña
          </Text>
        </View>
            <TextInput
              label="Email"
              value=''
               style={defaultStyle.InputText1Style}
              mode='outlined'
              onChangeText={text => setText(text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}

            />
           
    
    <View style={styles.buttonContainer}>
       {isLoading ? (
         <ActivityIndicator size="small" color={Colors.primary} />
       ) : (
         <Button
           color='rgb(103 ,103 ,103)'
           style={styles.btn}
           title= 'Solicitar Contraseña'
          onPress={authHandler}
         />
       )}

      </View>
  
      </Form>
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
   },
  imageContainer:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center',
    
  },
  Logo1:{
    marginBottom:10,
  },
  Logo2:{
    marginBottom:10

  },
  UserContainer:{
    flex:1,
    marginTop:40,
    marginBottom:40
  },
  buttonContainer: {
    backgroundColor:'red',
    marginTop: 30,
    width:'80%',
    alignSelf: 'center',

  },

 
  inputContainerText:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:15,
  },
  inputContainerTextSecond:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      margin:20,
      width:'100%',
      textAlign:"center"
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
    //   marginBottom:20
      // marginLeft:5
  }
})


export default ResetPass;
