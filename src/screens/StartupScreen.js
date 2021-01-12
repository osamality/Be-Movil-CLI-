import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  
  Image
} from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';
import img1 from '../assets/Images/logo.png'
import img from '../assets/Images/logo2.png'
import LinearGradient from 'react-native-linear-gradient';

const StartupScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('token');
      if (!userData) {
        dispatch(authActions.setDidTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token,} = transformedData;
      dispatch(authActions.authenticate(token));
    };
      let timer1 = setTimeout(() =>  tryLogin(), 2000)
      return () => {
        clearTimeout(timer1)
      }
  }, [dispatch]);

  return (
    <LinearGradient colors={['rgb(235,6,42)', 'rgb(232,6,42)','rgb(209,28,57)']} style={{
      
      flex:300,
      height:20
    
    }}>
    <View style={styles.screen}> 
      {/* <ActivityIndicator size="large" color={Colors.primary} /> */}
           <Image   source={img} style={styles.img}/>
           <Image  source={img1}  style={styles.img}/>
           <ActivityIndicator size="small" color='#ffff' />
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  img:{
    marginVertical:20
  }
});

export default StartupScreen;
