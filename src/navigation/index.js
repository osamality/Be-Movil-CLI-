import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator  from './authNavigation';
import AppNavigator from './appNavigation'
import StartupScreen from '../screens/StartupScreen';
import HelperComponent from '../screens/helperComponent'
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <AppNavigator/>}
      {/* {isAuth && <RecargasNavigator/>} */}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
      {!isAuth && !didTryAutoLogin && <HelperComponent />}

 
      
    </NavigationContainer>
  );
};

export default MainNavigator;
