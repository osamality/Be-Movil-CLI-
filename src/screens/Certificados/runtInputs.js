import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Form, Button } from 'native-base';
import { TextInput } from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from 'react-redux';
import * as certificadosActions from '../../store/actions/certificados';
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import { connect } from 'react-redux';
import customTapsBalance from '../../components/UI/globle/customTapsBalance';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RuntInputs = ({ initialValues, activeBalance, allBalance, activeProvider,navigation }) => {
  const dispatch = useDispatch()
  const refRBSheet = useRef()
  const [index, setindex] = useState(0)
  return (
    <Form style={{ marginTop: 1 }}>
      <TextInput style={defaultStyle.InputText1Style}
        label="Número de Placa*"
        value={initialValues.Ciudad}
        mode='outlined'
        // keyboardType="text"
        onChangeText={text => dispatch(certificadosActions.setInitialValues({ ...initialValues, "Ciudad": text }))}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
        editable={activeProvider.name ? true : false}
      />

      <TextInput
        label="Email *"
        value={initialValues.Matricula}
        style={defaultStyle.InputText1Style}
        mode='outlined'
        // keyboardType="text"
        onChangeText={text => dispatch(certificadosActions.setInitialValues({ ...initialValues, "Matricula": text }))}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
        editable={activeProvider.name ? true : false}


      />
      <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
        <Button disabled={initialValues.Ciudad !== '' && initialValues.Matricula !== '' ? false : true}
          onPress={() => refRBSheet.current.open()}
          style={initialValues.Ciudad !== '' && initialValues.Matricula !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
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
                  RUNT
                 </Text>
              </View>

              <View style={defaultStyle.container}>
                <View
                  style={defaultStyle.textTable}>
                  <Text style={defaultStyle.txt}>Producto:</Text>
                </View>
                <View style={defaultStyle.textTable1}>
                  <Text style={defaultStyle.txt}>{activeProvider.name}</Text>
                </View>
              </View>

              <View style={defaultStyle.container}>
                <View
                  style={defaultStyle.textTable}>
                  <Text style={defaultStyle.txt}>RUNT:</Text>
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
                  onPress={() => { navigation.navigate('Confirmar') }}
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

    </Form>
  );
}

const defaultStyle = StyleSheet.create({
  InputText1Style: {
    backgroundColor: '#fff',
    // paddingBottom:20,
    // shadowColor: '#000',
    // shadowOpacity: 0.4,
    // elevation: 2,
    // position: 'relative',
    height: 50,
    width: 375,
    marginBottom: 20
    // marginLeft:5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    flexDirection: 'row',
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    width: '40%',
    paddingVertical: '4%',
    borderWidth: 1,
    borderColor: 'rgb(232,232,232)',
    paddingHorizontal: '5%'
  },
  txt: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    marginRight: '15%',
  },
  txt2: {
    color: 'rgb(5,193,121)',
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: '8%',
  },
  textTable1: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    width: '60%',
    paddingVertical: '4%',
    borderWidth: 1,
    borderColor: 'rgb(232,232,232)',
    paddingHorizontal: '5%'
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
    marginTop: 30,
    backgroundColor: 'rgb(5,193,121)',
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelBtn: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    borderRadius: 5,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'

  },


})
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
})


const mapStateToProps = ({ balance, certificados, recargas }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: certificados.activeProvider,
  initialValues: certificados.initialValues,
  activeType: certificados.activeType


})


export default connect(mapStateToProps, null)(RuntInputs);