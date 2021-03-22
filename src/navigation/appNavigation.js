import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import HomeScreen from '../screens/Home/homeScreen';
import ProfileScreen from '../screens/Home/porfileScreen';
import ReportScreen from '../screens/Home/reportScreen';
import TransfersScreen from '../screens/Home/transfersScreen';
import ClientScreen from '../screens/Home/clientScreen';
import RecargasScreen from '../screens/Recargas/Recargas';
import createUser from '../screens/Clients/createUser';
import RepartosScreen from '../screens/Repartos/Repartos';
import BeCompanies from '../screens/betCompanies/Recargas'
import Comision from '../screens/Profile/Comision/Comision';
import Messages from '../screens/Profile/Messages/Messages';
import Products from '../screens/Profile/Products/Products';
import Profiles from '../screens/Profile/Profiles/Profiles';
import createProfile from '../screens/Profile/Profiles/createProfile';
import Complete from '../screens/complete';

import HeaderComponent from '../screens/layout/headerHome';
import Packages from '../screens/Recargas/Packages';
import Digital from '../screens/Digital';
import homeLogo from '../assets/Images/be3.png'
import arrows from '../assets/Images/arrow.png'
import repartos from '../assets/Images/repartos.png'
import perfil from '../assets/Images/perfil.png'
import clientes from '../assets/Images/clientes.png'
import iconAwesomeUser from '../assets/Images/iconAwesomeUser.png'
import BilleterasScreen from '../screens/Billeteras'
import Confirmar from '../screens/Confirmar'
import Certificados from '../screens/Certificados'
import Internacional from '../screens/Internacional'
import Settings from "../screens/Home/setting"
import Account from "../screens/Settings/Account"
import ChangePassword from "../screens/Settings/ChangePassword"

import Transactions from "../screens/transactions/Transactions"
import TransactionsDetails from "../screens/transactions/TransactionsDetails"
import TvScreen from "../screens/tv"
import Seguros from "../screens/seguros"
import Facturas from "../screens/Facturas"
import Pego from "../screens/Facturas/pego"
import { connect } from 'react-redux'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator = ({ activeProvider, titleHeader, navigation }) => {


  return (

    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          // headerTitle: props => <HeaderComponent />,
          // headerTitleAlign: 'center',
          headerShown: false
        }}
      />

      <Stack.Screen name="Seguros" component={Seguros}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Seguros',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Recargas" component={RecargasScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Recargas Móviles',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="createUser" component={createUser}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Crear Usuario',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
        }}
      />

      <Stack.Screen name="Setting" component={Settings}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Settings',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Account" component={Account}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Mi Cuenta',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="ChangePassword" component={ChangePassword}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Seguridad',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Transactions" component={Transactions}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Últimas Transacciones',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="TransactionsDetails" component={TransactionsDetails}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Comprobante de Pago',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Package" component={Packages}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: `Paquetes ${activeProvider.name}`,
          headerStyle: {
            backgroundColor: 'rgb(46,58,75)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Apuestas" component={BeCompanies}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: 'Apuestas Deportivas',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Digitales" component={Digital}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: 'Pines Digitales',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Billeteras" component={BilleterasScreen}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: titleHeader,
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Confirmar" component={Confirmar}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: 'Escoger Metodo de Pago',
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Certificados" component={Certificados}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Certificados",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Internacional" component={Internacional}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Internacional",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Tv" component={TvScreen}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "TV",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Facturas" component={Facturas}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Facturas",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="pego" component={Pego}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Servicios Públicos",
          headerStyle: {
            backgroundColor: 'rgb(235,6,42)',
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen name="Products" component={Products}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Productos Activos",
          headerStyle: {
            backgroundColor: 'rgb(216,50,75)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Profiles" component={Profiles}
        options={({ route, navigation }) => ({

          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Perfiles",
          headerStyle: {
            backgroundColor: 'rgb(216,50,75)',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('createProfile')}
              style={{ paddingHorizontal: '100%' }}
            >
              <Image source={require('../assets/Images/UserPlus.png')} style={{ height: 18, width: 23 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="createProfile" component={createProfile}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Crear Perfil",
          headerStyle: {
            backgroundColor: 'rgb(216,50,75)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Comision" component={Comision}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Comision",
          headerStyle: {
            backgroundColor: 'rgb(216,50,75)',

          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Messages" component={Messages}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          title: "Mensajes",
          headerStyle: {
            backgroundColor: 'rgb(216,50,75)',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="Complete" component={Complete}

        options={{
          headerShown: false
          // headerTitleAlign: 'center',
          // headerBackTitleVisible: false,

          // title: "Mensajes",
          // headerStyle: {
          //   backgroundColor: 'rgb(216,50,75)',
          // },
          // headerTintColor: '#fff',
        }}
      />


    </Stack.Navigator>
  );
}

const HomeTabs = () => {
  let spicalHieght
  Platform.OS == "ios" ? spicalHieght = 85 : spicalHieght = 60
  return (
    <Tab.Navigator screenOptions={({ route, }) => ({
      tabBarOptions: {
        activeTintColor: 'grey',
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let labelColor
        if (route.name === 'Home') {
          iconName = homeLogo;
        }
        else if (route.name === 'Porfile') {
          focused ? labelColor = "rgb(235,6,42)" : null
          iconName = perfil;
        }
        else if (route.name === 'Clients') {
          focused ? labelColor = "rgb(235,6,42)" : null
          iconName = clientes;
        }
        else if (route.name === 'Transfers') {
          focused ? labelColor = "rgb(235,6,42)" : null
          iconName = repartos;
        }
        else if (route.name === 'Reports') {
          focused ? labelColor = "rgb(235,6,42)" : null
          iconName = arrows;
        }

        return <Image source={iconName} color="black"
          style={{ tintColor: `${labelColor}` }}

        />
      },
    })}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: { height: spicalHieght }
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

const mapStateToProps = ({ product, billeteras }) => ({
  activeProvider: product.activeProvider,
  titleHeader: billeteras.title

})


export default connect(mapStateToProps, null)(AppNavigator);

