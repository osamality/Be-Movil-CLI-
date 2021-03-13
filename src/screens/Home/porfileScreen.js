import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Content, Button } from 'native-base';
import proId from '../../assets/Images/proId.png'
import { useDispatch } from 'react-redux';
import * as BalanceActions from '../../store/actions/balance';
import * as RecargasActions from '../../store/actions/recargas'
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTaps from '../../components/UI/globle/customTaps';
import { connect } from 'react-redux';
import ProfileType from '../../components/UI/ProfileType';
import Products from '../../components/UI/Products'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import ProfileBarCode from '../../components/UI/profile/ProfileBarCode';
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../layout/headerHome';

const CategoriesScreen = ({ activeBalance, navigation }) => {
  const [storageData, setStorageData] = useState({})
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchBalance = async () => {

      const userData = await AsyncStorage.getItem('token');
      if (userData) {
        const transferData = JSON.parse(userData)
        const { token } = transferData
        const acctualToken = `Token ${token}`

        axios.get(
          `${SERVER_URL}/api/reportes/saldo/`,
          { headers: { authorization: acctualToken } })
          .then((response) => {
            const action = BalanceActions.saveBalance(response.data);
            dispatch(action)
          })
          .catch((err) => {
            console.log(err, 'err')
          })
      }
    }

    fetchBalance();

  }, []);

  return (
    <Container style={{ backgroundColor: "rgb(252,254,255)" }} >
      <HeaderComponent />
      <Content style={{ flex: 1 }}>
        <View style={styles.Contentcontainer}>
          <LinearGradient colors={['rgb(178,43,65)', 'rgb(227,60,86)']} style={styles.productContent} >
            <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 5 }}>
              <Text style={{ ...styles.textAdds }}>
                Ultima Conexión 25 Enero a las 10:28 pm
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={proId} />
                <Text style={styles.textAdds}>Image</Text>
              </View>
              <View style={{ marginLeft: 70 }}>
                <Text style={styles.textAdds}>
                  Nicole Hamilton
                </Text>
                <Text style={styles.textAdds}>
                  Distribuidor
                </Text>
              </View>
            </View>
          </LinearGradient>
          <CustomTapsBalance />
          <View style={styles.paymentContent}>
            <Text style={styles.paymentText}>
              Herramientos
            </Text>
          </View>
          <ProfileType
            navigation={navigation}
          />

          <ProfileBarCode />




        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  adds: {
    flex: 1,
    padding: 25,
    shadowColor: 'grey',
    shadowOpacity: 3.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textAdds: {
    color: 'white',
    textAlign: 'center',
    marginLeft: 10
  },

  test: {
    backgroundColor: 'rgb(216,216, 216)',

  },

  Contentcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10
  },

  TextContent: {
    shadowColor: 'black',
    shadowOpacity: 5.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    textAlign: 'center'

  },
  paymentContent: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-start',
    padding: 7,
    backgroundColor: 'rgb(30,48,74)',
    marginTop: 10,
  },
  productContent: {
    width: "100%",
    justifyContent: 'flex-start',
    padding: 8,
    backgroundColor: 'red',
    marginTop: 10,
  },
  productContent2: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-start',
    padding: 8,
    backgroundColor: 'red',
    marginTop: 1,
  },
  paymentText: {
    fontWeight: "bold",
    color: '#ffff',
    marginLeft: 10,
    marginBottom: 0

  },
  // paymentIcons:{
  //   flexDirection:'row'
  // }
});

const mapStateToProps = ({ balance }) => ({
  activeBalance: balance.activeBalance
})

export default connect(mapStateToProps, null)(CategoriesScreen);