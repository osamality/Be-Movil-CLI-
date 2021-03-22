import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import arrowBack from '../../assets/Images/arrowBack.png'
import menu from '../../assets/Images/menu.png'
import UserPlus from '../../assets/Images/UserPlus.png'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

// props.navigation.navigate('Auth');



export const HeaderComponent = ({ }) => {
  const navigation = useNavigation()
  return (

    <View
      style={{
        height: '10%',
        // marginTop: '12%',
        marginBottom: '2%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'red'
      }}>
      <TouchableOpacity style={{ marginTop: '8%', marginLeft: '2%' }} onPress={() => navigation.navigate("Home")}>
        <Image source={arrowBack} style={{ tintColor: 'white', }} />
      </TouchableOpacity>
      <Text

        style={{ color: 'white', marginTop: 34, fontSize: 20, marginLeft: '32%' }}
      >
        Mis Usuarios
      </Text>
      <TouchableOpacity style={{ marginTop: 30, marginLeft: '19%' }} onPress={() => navigation.navigate("createUser")}>
        <Icon name={'search'} color={'white'} size={16} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 30, marginLeft: '4%' }} onPress={() => navigation.navigate("createUser")}>
        <Image style={{ height: 18, width: 23 }} source={UserPlus} />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
        <Image style={styles.Logo1} source={menu} />
      </TouchableOpacity> */}
    </View>

  );
}


const styles = StyleSheet.create({
  bodycon: {
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center'

  },
  test: {
    backgroundColor: 'rgb(216,216, 216)',

  },
  Logo1: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center'
    // color:'rgb(103,103,103)'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderComponent;