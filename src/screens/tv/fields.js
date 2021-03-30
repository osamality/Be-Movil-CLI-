import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Form, Button } from 'native-base';
import { TextInput } from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from 'react-redux';
import * as TvActions from '../../store/actions/Tv';
import { connect } from 'react-redux';

const RuntInputs = ({ initialValues, activeBalance, allBalance, activeProvider }) => {
  const dispatch = useDispatch()
  const refRBSheet = useRef()
  const [index, setindex] = useState(0)
  return (
    <Form style={{ marginTop: 1 }}>
      <TextInput style={defaultStyle.InputText1Style}
        label="Número de Placa*"
        value={initialValues.Numero}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => dispatch(TvActions.setInitialValues({ ...initialValues, "Numero": text }))}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
        editable={activeProvider.name ? true : false}
      />

      <TextInput
        label="Email"
        value={initialValues.email}
        style={defaultStyle.InputText1Style}
        mode='outlined'
        onChangeText={text => dispatch(TvActions.setInitialValues({ ...initialValues, "email": text }))}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
        editable={activeProvider.name ? true : false}


      />

      <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>

        <Button disabled={initialValues.Numero !== '' && initialValues.email !== '' ? false : true}
          onPress={() => refRBSheet.current.open()}
          style={initialValues.Numero !== '' && initialValues.email !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
          <Text style={{ color: '#ffff' }}>Recargas</Text>
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
      {/* <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={450}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
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
              <Text  >
                Estas apunto de Recargar la Linea
            </Text>
              

              <View style={defaultStyle.container}>
                <View
                  style={defaultStyle.textTable}>
                  <Text>Operador:</Text>
                </View>
                <View style={defaultStyle.textTable1}>
                  <Text >{activeProvider.name}</Text>
                </View>
              </View>
              <View style={defaultStyle.container}>
                <View
                  style={defaultStyle.textTable}>
                  <Text>Linea:</Text>
                </View>
                <View style={defaultStyle.textTable1}>
                  <Text >{initialValues.Numero}</Text>
                </View>
              </View>
              <View style={defaultStyle.container}>
                <View
                  style={defaultStyle.textTable}>
                  <Text>Email:</Text>
                </View>
                <View style={defaultStyle.textTable1}>
                  <Text >{initialValues.email}</Text>
                </View>
              </View>

              <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 10 }}  >
                Realizar compra desde:
            </Text>
              <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>


                <Button
                  style={index == 0 ? defaultStyle.button1active : defaultStyle.button1}
                  onPress={() => setindex(0)}
                >
                  <Text style={index == 0 ? styles.btnTextActive : styles.btnText}>Recargas</Text>
                  <Text style={index == 0 ? styles.btnTextActive : styles.btnText}>{allBalance.SS}</Text>

                </Button>

                <Button
                  style={index == 1 ? defaultStyle.button1active : defaultStyle.button1}
                  onPress={() => setindex(1)}
                >
                  <Text style={index == 1 ? styles.btnTextActive : styles.btnText}>Mi Ahorro</Text>
                  <Text style={index == 1 ? styles.btnTextActive : styles.btnText}>{allBalance.SP}</Text>

                </Button>
                <Button
                  onPress={() => setindex(2)}
                  style={index == 2 ? defaultStyle.button1active : defaultStyle.button1}>
                  <Text style={index == 2 ? styles.btnTextActive : styles.btnText}>Mi Caja</Text>
                  <Text style={index == 2 ? styles.btnTextActive : styles.btnText}>{allBalance.ST}</Text>

                </Button>
              </View>
              <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>

                <Button
                  style={defaultStyle.accecptBtn}>
                  <Text style={{ color: '#ffff' }}>Aceptar</Text>
                </Button>
              </View>
              <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>

                <Button
                  style={defaultStyle.cancelBtn}>
                  <Text style={{ color: 'rgb(158,159,159)' }}>Cancel</Text>
                </Button>
              </View>
              <View style={{ marginTop: 2 }}>

              </View>
            </View>
          </ScrollView>
        </RBSheet>

      </View> */}

    </Form>
  );
}

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
    alignItems: 'center',
    marginBottom: 2
  },
  buttonactive: {
    backgroundColor: 'red',
    width: 375,
    borderRadius: 5,
    // width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2


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
    margin: 10,
    backgroundColor: 'rgb(235,6,42)',
    borderRadius: 5,
    width: '80%',
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

  }

})
const styles = StyleSheet.create({
  btnText: {
    color: 'rgb(145,145,145)'
  },
  btnTextActive: {
    color: '#ffff'

  },
})


const mapStateToProps = ({ balance, TvReducer }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: TvReducer.activeProvider,
  initialValues: TvReducer.initialValues,
  activeType: TvReducer.activeType


})


export default connect(mapStateToProps, null)(RuntInputs);