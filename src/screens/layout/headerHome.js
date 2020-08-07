import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Logo1 from '../../assets/Images/Group5134.png'

const HeaderComponent = props =>  {
  return (
    
      // <View style={{flex:1}} >
      <Image  style={styles.Logo1}
              source={Logo1}
            />
      // </View>
     
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
