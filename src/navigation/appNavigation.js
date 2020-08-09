import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/homeScreen';
import ProfileScreen from '../screens/Home/porfileScreen';
import ReportScreen from '../screens/Home/reportScreen';
import TransfersScreen from '../screens/Home/transfersScreen';
import ClientScreen from '../screens/Home/clientScreen';
import RecargasScreen from '../screens/Recargas/Recargas';
import HeaderComponent from '../screens/layout/headerHome';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator= ()=> {


  return (

  <Stack.Navigator >
    <Stack.Screen 
    name="Home" 
    component={HomeTabs}
    options={{
       headerTitle: props => <HeaderComponent  />,
       headerTitleAlign:'center'
    
    }}

    />
    <Stack.Screen name="Recargas" component={RecargasScreen}
     options={{
       headerTitleAlign:'center',
       title: 'Recargas Móviles',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />
  </Stack.Navigator>
  );
}

const HomeTabs = ()=> {
  return (
    <Tab.Navigator  screenOptions={({ route,  }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
    
        if (route.name === 'Home') {
          iconName = 'home';
          showLabel=false
        }
        else if (route.name === 'Porfile') {
          iconName ='user';
        }
        else if (route.name === 'Clients') {
          iconName ='users';
        }
        else if (route.name === 'Transfers') {
          iconName ='exchange-alt';
        }

        else if (route.name === 'Reports') {
          iconName ='chart-bar';
        }

      

        
    
        // You can return any component that you like here!
        // return <Ionicons name="github" size={size} color={color}/>

         return  <Icon name={iconName} size={15} color="black"/>
        
      },
    })}
    initialRouteName ="Home"
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',

    }}
    
    >
      <Tab.Screen name="Reports" component={ReportScreen} />
        <Tab.Screen name="Clients" component={ClientScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transfers" component={TransfersScreen} />
        <Tab.Screen name="Porfile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


export default AppNavigator;

