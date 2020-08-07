import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import Recargas from '../screens/Recargas/Recargas';



const Stack = createStackNavigator();

const RecargasNavigator= ()=> {
  return (
      <Stack.Navigator initialRouteName="Recargas" headerMode="none">
        <Stack.Screen name="Recargas" component={Recargas} />
      </Stack.Navigator>
  );
}

export default RecargasNavigator;