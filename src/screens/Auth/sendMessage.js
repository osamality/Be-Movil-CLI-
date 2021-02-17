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
import OTPCompo from './otp'

import { Container, Form, Content, Text, Button } from 'native-base';
import { TextInput } from 'react-native-paper'
import { useNavigation } from "@react-navigation/native";

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import Logo1 from '../../assets/Images/mainLogo.png'
import Logo2 from '../../assets/Images/mainMaster.png'
import OtpInputs from 'react-native-otp-inputs';

const ResetPass = props => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(0);

  const Navigation = useNavigation()

  const dispatch = useDispatch();


  const authHandler = async () => {
    Navigation.navigate("Login")

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
          <View style={{ margin: 10 }}></View>
          <View style={styles.imageContainer}>
            <Image style={styles.Logo1}
              source={Logo1}
            />
            <Image style={styles.Logo2}
              source={Logo2}
            />
          </View>
          {/* <View style={{margin:15}}></View> */}

          <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Content>

              <Form style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.inputContainerText}>
                  <Text style={{ fontWeight: 'bold' }}>
                    Código de Verificación
          </Text>
                </View>
                <View style={styles.inputContainerTextSecond}>
                  <Text style={{ alignSelf: 'center', textAlign: 'center' }}>
                    Ingrese o pegue su Token Authy
          </Text>
                </View>

                <OTPCompo />

                <View style={styles.buttonContainer}>
                  {isLoading ? (
                    <ActivityIndicator size="small" color='rgb(235,6,42)' />
                  ) : (
                      <Button
                        style={styles.btn}
                        onPress={authHandler}
                      >
                        <Text style={{ color: '#ffff' }}>Continuar</Text>
                      </Button>
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

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff'
  },

  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  Logo1: {
    marginBottom: 25,
  },
  Logo2: {
    marginBottom: 10

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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:15,
  },
  inputContainerTextSecond: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: '100%',
    textAlign: "center"
  }


});
const defaultStyle = StyleSheet.create({
  InputText1Style: {
    backgroundColor: '#fff',
    // paddingBottom:20,
    // shadowColor: '#000',
    // shadowOpacity: 0.4,
    // elevation: 2,
    // position: 'relative',
    height: 50,
    width: 345,
    //   marginBottom:20
    // marginLeft:5
  }
})


export default ResetPass;
