import React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Logo1 from '../../assets/Images/Group5134.png'
import menu from '../../assets/Images/menu.png'
import homebe from '../../assets/Images/homebe.png'
import { useNavigation } from "@react-navigation/native";

        // props.navigation.navigate('Auth');



const HeaderComponent = ({}) =>  {
  const navigation =useNavigation()
  return (
    
      <View style={{flex:1,justifyContent:'space-around',
      width:'100%',
      alignItems:'center',flexDirection:'row',}} >
     <TouchableOpacity onPress={()=>navigation.navigate("Transactions")}> 
       <Image  source={homebe}/>
       </TouchableOpacity>
      <Image  style={styles.Logo1} source={Logo1}/>
      <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
        <Image  style={styles.Logo1} source={menu}/>
        </TouchableOpacity>


            
       </View>
     
  );
}

const styles = StyleSheet.create({
  bodycon:{
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center'

  },
  test:{
    backgroundColor: 'rgb(216,216, 216)',
    
  },
  Logo1:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center'
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
