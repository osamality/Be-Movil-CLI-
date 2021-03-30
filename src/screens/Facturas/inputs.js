import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, } from 'react-native';
import { connect } from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import notactiveImage from '../../assets/Images/notactive.png';
import { isEmpty } from 'lodash';
import RBSheet from "react-native-raw-bottom-sheet";
import { Form, Button } from 'native-base';
import NormalInputs from './normalInputs'
// import SnrInputs from './SnrInputs'
const activeImageInputs = (initialValues, activeProvider, activeType) => {

  if (isEmpty(activeProvider)) {
    return <Image source={notactiveImage} />
  }
  else {
    if (initialValues.numero == '' || initialValues.valor == '' || initialValues.correo == '') {
      return <Image source={beImg} />
    }
    else {
      return <Image source={beactiveImg} />
    }
  }
}


const RecargasChange = ({ activeProvider, initialValues, activeType, allBalance , navigation}) => {
  const refRBSheet = useRef()

  const [index, setindex] = useState(0)


  return (
    <>
      <View style={styles.paymentContent}>
        {activeImageInputs(initialValues, activeProvider, activeType)}
        <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
          Información Contador:
                  </Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
      </View>
      <NormalInputs />
      <CustomTapsBalance />
      <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 40 }}>
        <Button disabled={initialValues.numero !== '' && initialValues.valor !== '' && initialValues.correo !== ''
          ? false : true}
          onPress={() => refRBSheet.current.open()}
          style={initialValues.numero !== '' && initialValues.valor !== '' &&
            activeProvider.name && initialValues.correo !== '' ? defaultStyle.buttonactive : defaultStyle.btn}>
          <Text style={{ color: '#ffff' }}>Cargar</Text>
        </Button>
      </View>


      <View>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={500}
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
                  Acueducto y Energía EMCALI
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
                    <Text style={defaultStyle.txt}># Referencia:</Text>
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
                    <Text onPress={() => {
                      refRBSheet.current.close()
                      
                      navigation.navigate('Confirmar')}} style={defaultStyle.txt2}>Cambiar</Text>
                  </View>
                </View>


                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <Button
                    onPress={() => {
                      refRBSheet.current.close()
                      navigation.navigate('Complete') }}
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
  Text: {
    color: 'white',
    fontSize: 18
  },
  tophead: {
    backgroundColor: 'rgb(235,6,42)',
    width: '100%',
    marginTop: '2%',
    paddingVertical: '2%'
  },

  paymentContent: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    // marginTop:10,
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
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'black'
    //   marginTop:20
  },
  notactivePackages: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(219,219,219)',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgb(219,219,219)'

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


  }

});

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
    width: '43%',
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
    marginTop: 60,
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

const mapStateToProps = ({ balance, Facturas, }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: Facturas.activeProvider,
  initialValues: Facturas.initialValues,
  activeType: Facturas.activeType


})


export default connect(mapStateToProps, null)(RecargasChange);







