import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import { Form, Button } from 'native-base';
import { TextInput } from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/FontAwesome5';
import arrowImage from '../../assets/Images/arrowBottm3.png';
import notactiveImage from '../../assets/Images/notactive.png';
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import { isEmpty } from 'lodash';
import * as BetCompanies from '../../store/actions/betCompanies';
import { useDispatch } from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const activeImageInputs = (initialValues, activeProvider, type) => {

  if (isEmpty(activeProvider)) {
    return <Image source={notactiveImage} />

  }
  else {

    if (initialValues.numeroDocumento == '' || initialValues.Monto == '') {
      return <Image source={beImg} />
    }
    else {
      return <Image source={beactiveImg} />

    }

  }

}


const renderInputs = (initialValues, activeProvider, refRBSheet) => {

  const dispatch = useDispatch()

  return (

    <Form style={{ marginTop: 1 }}>
      <TextInput style={defaultStyle.InputText1Style}
        label="Numero de Documento*"
        value={initialValues.numeroDocumento}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => dispatch(BetCompanies.setIninalValues({ ...initialValues, "numeroDocumento": text }))}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
        editable={activeProvider.name ? true : false}
      />

      <TextInput
        label="Monto a Recargar *"
        value={initialValues.Monto}
        style={defaultStyle.InputText1Style}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => dispatch(BetCompanies.setIninalValues({ ...initialValues, "Monto": text }))}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
        editable={activeProvider.name ? true : false}
      />


    </Form>
  )

}


const RecargasChange = ({ initialValues, activeProvider, navigation, activePackage, allBalance }) => {
  const refRBSheet = useRef();
  const [index, setindex] = useState(0)

  return (
    <>
      <View style={styles.paymentContent}>
        {activeImageInputs(initialValues, activeProvider, "bet_companies_Recargas")}
        <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
          Información de tu Cuenta :
            </Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
      </View>
      {renderInputs(initialValues, activeProvider, refRBSheet)}
      <CustomTapsBalance />

      <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 50, }}>
        <Button disabled={initialValues.numeroDocumento !== '' && initialValues.Monto !== '' ? false : true}
          onPress={() => refRBSheet.current.open()}
          style={initialValues.numeroDocumento !== '' && initialValues.Monto !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
          <Text style={{ color: '#ffff' }}>Recargas</Text>
        </Button>
      </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={450}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(52, 52, 52, 0.4)',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1
            },
            container: {
              borderRadius: 50,
              justifyContent: 'center',
              // flex:1,
              alignItems: 'center'

            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        >
         <ScrollView showsHorizontalScrollIndicator={false}
            >
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
                  Confirmar Compra
                 </Text>
                <View style={styles.tophead}>
                  <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', letterSpacing: 0.5 }} >
                    Paquete ETB
                 </Text>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Operdor:</Text>
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>{activeProvider.name}</Text>
                  </View>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Linea:</Text>
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>{initialValues.phone}</Text>
                  </View>
                </View>


                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Valor:</Text>
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>{initialValues.amount}</Text>
                  </View>
                </View>


                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Pago:</Text>
                    {/* <Image style={{ height: 20, width: 30 }} source={arrowBB} /> */}
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>Recargas</Text>
                    <Text style={defaultStyle.txt2}>Cambiar</Text>
                  </View>
                </View>


                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <Button
                    onPress={() => { 
                      navigation.navigate('Complete')
                    }}
                    style={defaultStyle.accecptBtn}>
                    <Text style={{ color: '#ffff', fontSize: 17, }}>Aceptar y Comprar</Text>
                  </Button>
                </View>

                <View style={{ marginTop: 2 }}>

                </View>
              </View>
            </ScrollView>
        </RBSheet>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: 'rgb(145,145,145)'
  },
  btnTextActive: {
    color: '#ffff'
  },
  paymentContent: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center'
  },
  paymentText: {
    fontWeight: "bold",
    marginLeft: 5
  },
  packages: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    backgroundColor: 'rgb(37,47,63)'
  },
  packagesDone: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    padding: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 25,
    elevation: 8,
    borderRadius: 8,
    backgroundColor: "rgb(255,255,255)",
    borderColor: '#ffff',
    textAlign: 'center'
  },
  notactivePackages: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(219,219,219)',
    borderRadius: 8,
    padding: 20,
    backgroundColor: 'rgb(181,185,185)'
  },
  DownloadIcon: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: "#ffff",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Image: {
    width: 17,
    height: 17,
  },
  content: {
    backgroundColor: 'rgb(46,58,75)',
    padding: 6,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  Text: {
    color: 'white',
    fontSize: 18
  },
  tophead: {
    backgroundColor: 'rgb(235,6,42)',
    width: width,
    marginTop: '2%',
    paddingVertical: '2%'
  }
});

const defaultStyle = StyleSheet.create({
  InputText1Style: {
    backgroundColor: '#fff',
    height: 50,
    width: 375,
    marginBottom: 20
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },

  btn: {
    backgroundColor: 'rgb(103 ,103 ,103)',
    borderRadius: 5,
    // width: '80%',
    width: 375,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonactive: {
    backgroundColor: 'red',
    width: 375,
    borderRadius: 5,
    // width: '80%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  textTable: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(232,232,232)'
  },
  textTable1: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'rgb(232,232,232)'
  },
  button1: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: 'rgb(177,177,177)',
    borderRadius: 3,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'column',

  },
  button1active: {
    flexDirection: 'column',
    backgroundColor: 'rgb(44,209,158)',
    borderWidth: 1,
    borderColor: 'rgb(44,209,158)',
    borderRadius: 3,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  accecptBtn: {
    marginTop: 60,
    backgroundColor: 'rgb(5,193,121)',
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },

})

const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: betCompanies.activeProvider,
  initialValues: betCompanies.initialValues,
  activePackage: recargas.activePackage

}) 


export default connect(mapStateToProps, null)(RecargasChange);







