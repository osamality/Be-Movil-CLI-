import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, StyleSheet, Platform } from 'react-native';

import HomeScreen from '../screens/Home/homeScreen';
import ProfileScreen from '../screens/Home/porfileScreen';
import ReportScreen from '../screens/Home/reportScreen';
import TransfersScreen from '../screens/Home/transfersScreen';
import ClientScreen from '../screens/Home/clientScreen';
import RecargasScreen from '../screens/Recargas/Recargas';
import BeCompanies from '../screens/betCompanies/Recargas'
import HeaderComponent from '../screens/layout/headerHome';
import Packages from '../screens/Recargas/Packages';
import Digital from '../screens/Digital';
import homeLogo from '../assets/Images/be3.png'
import arrows from '../assets/Images/arrow.png'
import repartos from '../assets/Images/repartos.png'
import perfil from '../assets/Images/perfil.png'
import clientes from '../assets/Images/clientes.png'
import BilleterasScreen from '../screens/Billeteras'
import Certificados from '../screens/Certificados'
import Internacional from '../screens/Internacional'
import Settings from "../screens/Home/setting"
import TvScreen from "../screens/tv"
import Facturas from "../screens/Facturas"
import Pego from "../screens/Facturas/pego"
import {connect} from 'react-redux'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator= ({activeProvider, titleHeader})=> {


  return (

  <Stack.Navigator >
    <Stack.Screen 
    name="Home" 
    component={HomeTabs}
    
    options={{
       headerTitle: props => <HeaderComponent/>,
       headerTitleAlign:'center',
    }}

    />
    <Stack.Screen name="Recargas" component={RecargasScreen}
     options={{
      headerBackTitleVisible:false,
       headerTitleAlign:'center',
       title: 'Recargas Móviles',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />

<Stack.Screen name="Setting" component={Settings}
     options={{
      headerBackTitleVisible:false,
       headerTitleAlign:'center',
       title: 'Settings',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />
    <Stack.Screen name="Package" component={Packages}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: `Paquetes ${activeProvider.name}`,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
   }}
    />
      <Stack.Screen name="Apuestas" component={BeCompanies}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: 'Apuestas Deportivas',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />

   <Stack.Screen name="Digitales" component={Digital}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: 'Pines Digitales',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />
  <Stack.Screen name="Billeteras" component={BilleterasScreen}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: titleHeader,
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />
    <Stack.Screen name="Certificados" component={Certificados}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: "Certificados",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />
    <Stack.Screen name="Internacional" component={Internacional}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: "Internacional",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />

 <Stack.Screen name="Tv" component={TvScreen}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: "TV",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
    />

<Stack.Screen name="Facturas" component={Facturas}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: "Facturas",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
   }}
/>

<Stack.Screen name="pego" component={Pego}
     options={{
       headerTitleAlign:'center',
       headerBackTitleVisible:false,

       title: "Servicios Públicos",
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
  let spicalHieght 
  Platform.OS == "ios" ? spicalHieght = 85 : spicalHieght = 60
  return (
    <Tab.Navigator  screenOptions={({ route,  }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
    
        if (route.name === 'Home') {
          iconName = homeLogo;
         
        }
        else if (route.name === 'Porfile') {
          iconName =perfil;
        }
        else if (route.name === 'Clients') {
          iconName =clientes;
        }
        else if (route.name === 'Transfers') {
          iconName =repartos;
        }

        else if (route.name === 'Reports') {
          iconName =arrows;
        }

      

        
    
        // You can return any component that you like here!
        // return <Ionicons name="github" size={size} color={color}/>

         return  <Image source={iconName}  color="black"/>
        
      },
    })}
    initialRouteName ="Home"
    tabBarOptions={{
     showLabel :false,
     style:{height:spicalHieght}
     

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

const mapStateToProps = ({product,billeteras}) => ({
  activeProvider : product.activeProvider,
  titleHeader : billeteras.title
    
})


export default connect(mapStateToProps,null)(AppNavigator);

