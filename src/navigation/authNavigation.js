import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import SignIn from '../screens/Auth/login';
import ResetPass from '../screens/Auth/resetPassword'
import OTPComponemnt from '../screens/Auth/sendMessage'



const Stack = createStackNavigator();

const AuthNavigator= ()=> {
  return (
      <Stack.Navigator initialRouteName="Auth" >
        <Stack.Screen options={{headerShown: false}} name="Login" component={SignIn} />
        <Stack.Screen name="ResetPass" component={ResetPass}  options={{
          headerBackTitleVisible:false,
          headerTintColor :'black',
          title: null,}} />

     <Stack.Screen name="OTP" component={OTPComponemnt}  options={{
          headerBackTitleVisible:false,
          headerTintColor :'black',
          title: null,}} />

      </Stack.Navigator>
  );
}

export default AuthNavigator;