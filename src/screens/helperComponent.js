import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image
} from 'react-native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';
import img1 from '../assets/Images/logo.png'
import img from '../assets/Images/logo2.png'
const HelperComponent = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      await AsyncStorage.clear()
      const userData = await AsyncStorage.getItem('token');
      if (!userData) {
        // props.navigation.navigate('Auth');
        dispatch(authActions.setDidTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token,} = transformedData;

  


      // props.navigation.navigate('Shop');
      dispatch(authActions.authenticate(token));
    };

    // tryLogin();
  }, []);

  return (
    <View style={styles.screen}>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  }
});

export default HelperComponent;
