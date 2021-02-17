import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
// import SegmentedControlTab from "react-native-segmented-control-tab";
import { Formik } from 'formik';

import { Container, Form, Content, Text, Button } from 'native-base';
import { TextInput } from 'react-native-paper'

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import Logo1 from '../../assets/Images/mainLogo.png'
import Logo2 from '../../assets/Images/mainMaster.png'

const SignIn = ({ navigation }) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialVales] = useState({
    email: '',
    password: ''
  })
  const [selected, setSelected] = useState(0);


  const dispatch = useDispatch();


  const authHandler = async () => {
    let action;

    action = authActions.login("ahmed", "Ahmed2hamdi");
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

  const setPass = (text) => {
    setInitialVales({
      ...initialValues,
      password: text
    })
  }

  const setEmail = (text) => {
    setInitialVales({
      ...initialValues,
      email: text
    })
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <>
          <View style={{ margin: 20 }}></View>
          <View style={styles.imageContainer}>
            <Image style={styles.Logo1}
              source={Logo1}
            />
            <Image style={styles.Logo2}
              source={Logo2}
            />
          </View>
          <View style={{ margin: 15 }}></View>

          <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Content>
              {/* <ScrollView> */}
              <Form>
                <TextInput
                  label="Usuario"
                  value={initialValues.email}
                  style={defaultStyle.InputText1Style}
                  mode='outlined'
                  onChangeText={text => setEmail(text)}
                  underlineColor='transparent'
                  underlineColorAndroid={'rgba(0,0,0,0)'}
                  text='white'
                  direction='rtl'
                  dense={true}
                  theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}

                />

                <TextInput style={defaultStyle.InputText1Style}
                  label="Contraseña"
                  value={initialValues.password}
                  mode='outlined'
                  secureTextEntry={true}
                  // keyboardType="numeric"
                  onChangeText={text => setPass(text)}
                  underlineColor='transparent'
                  underlineColorAndroid={'rgba(0,0,0,0)'}
                  text='white'
                  direction='rtl'
                  theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
                />

                <View style={styles.inputContainerText}>
                  <Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.navigate('ResetPass')}>
                    Olvide Contraseña ?
                  </Text>
                </View>
                <View style={styles.buttonContainer}>
                  {isLoading ? (
                    <ActivityIndicator size="small" color='rgb(235,6,42)' />
                  ) : (
                      <Button
                        style={styles.btn}
                        onPress={authHandler}
                      >
                        <Text style={{ color: '#ffff' }}>Iniciar Sesión</Text>
                      </Button>
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

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff'
  },

  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // maxHeight:'70%'
  },
  imageContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    // height:30,

  },
  Logo1: {
    marginBottom: 25,
  },
  Logo2: {
    marginBottom: 20

  },
  UserContainer: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40
  },
  buttonContainer: {

    marginTop: 30,
    width: '100%',
    alignSelf: 'center',
  },
  btn: {

    backgroundColor: 'rgb(235,6,42)',
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2
  },

  inputContainerText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingTop:5,
    // marginTop:2.5,
    // marginBottom:15,
    // marginRight:10
  }


});
const defaultStyle = StyleSheet.create({
  InputText1Style: {
    backgroundColor: '#fff',
    height: 50,
    width: 345,
    marginBottom: 20
  }
})


export default SignIn;
