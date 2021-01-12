import React from 'react';
import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import person from '../../assets/Images/personIcon3.png'
import change from '../../assets/Images/change3.png'
import auda from '../../assets/Images/auda.png'
import metro from '../../assets/Images/metro.png'
import logout from '../../assets/Images/logout.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

const FavouriteScreen = props =>  {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const logOut = async () => {
    await AsyncStorage.removeItem('token')
    dispatch(authActions.setDidTryAL());
    dispatch(authActions.removeToken());

  };
  return (
    <>
     <View style={styles.content}>
       <View style={styles.circle}/>
       <View style={styles.title}>
         <Text style={styles.titleText}>
         Javier Mora
         </Text>
         <Text style={styles.subTitle}>
         Cuenta Distribuidor
         </Text>
       </View>
       <View style={styles.TextId}>
       <Text style={styles.subTitle}>
       ID: 196196
       </Text>
       </View>
     </View>
     <View style={styles.body}>
     <TouchableOpacity style={styles.row}>
       <Image source={person} style={styles.image}/>
       <Text style={styles.subTitle}>Account</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.row}>
       <Image source={change} style={styles.image}/>
       <Text style={styles.subTitle}>Seguridad</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.row}>
       <Image source={auda} style={styles.image}/>
       <Text style={styles.subTitle}>Ayuda</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.row}>
       <Image source={metro} style={styles.image}/>
       <Text style={styles.subTitle}>Términos & Condiciones</Text>
     </TouchableOpacity>
     </View>
     <View style={styles.footer}>
     <TouchableOpacity style={styles.logout} onPress={logOut}>
       <Image source={logout} style={styles.imagelog}/>
       <Text style={styles.subTitle}>Cerrar Sesión</Text>
     </TouchableOpacity>
     <Text style={styles.version}>
     Versión 2.0
     </Text>
     </View>
     </>
  );
}

const styles = StyleSheet.create({
  content:{
    justifyContent:'space-around',
    alignContent:'center',
    flexDirection:'row',
    width:'90%',
    margin:20

  },
  circle:{
    width:60,
    height:60,
    borderRadius : 60/2,
    borderWidth:1,
    borderColor:'rgb(112,112,112)',
  },
  title:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:'5%',
  },
  titleText:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:5
  },
  subTitle:{
    fontSize:15
  },
  TextId:{
    justifyContent:'center',
    alignItems:'center'
  },
  body:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  row:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'90%',
    borderBottomColor:'rgb(216,216,216)',
    borderBottomWidth:1.5,
    padding:15
  },
  logout:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    borderBottomColor:'rgb(216,216,216)',
    borderBottomWidth:1.5,
    padding:15,
    borderTopColor:'rgb(216,216,216)',
    borderTopWidth:1.5,
  },
  image:{
     marginRight:20
  },
  imagelog:{
    // marginHorizontal:28,
    marginRight:20,
    marginLeft:28
  },
  footer:{
  
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  version:{
    textAlign:'center',
    marginVertical:20,
    color:'rgb(159,159,159)'
  }
});

export default FavouriteScreen;
