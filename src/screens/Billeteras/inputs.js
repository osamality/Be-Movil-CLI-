import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Pressable, Keyboard, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import beImg from '../../assets/Images/be.png'
import CheckCircleOutline from '../../assets/Images/CheckCircleOutline.png';
import beactiveImg from '../../assets/Images/bactive2.png'
import { Form, Button } from 'native-base';
import { TextInput } from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import notactiveImage from '../../assets/Images/notactive.png';
import bigLogo from '../../assets/Images/bigLogo.png'
import { isEmpty } from 'lodash';
import * as billeterasActions from '../../store/actions/billeteras';
import { useDispatch } from 'react-redux';
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const activeImageInputs = (initialValuesDeposito, initialValuesRetiros, activeProvider, activeType) => {

  if (isEmpty(activeProvider)) {
    return <Image source={notactiveImage} />

  }
  else {
    if (activeType == "Deposito") {

      if (initialValuesDeposito.Linea == '' || initialValuesDeposito.Monto_Recargar == '') {
        return <Image source={beImg} />
      }
      else {
        return <Image source={beactiveImg} />

      }
    }
    else {
      if (initialValuesRetiros.Linea == '' || initialValuesRetiros.Valor == '' || initialValuesRetiros.Toquen == '') {
        return <Image source={beImg} />
      }
      else {
        return <Image source={beactiveImg} />

      }
    }


  }

}


const renderInputs = (initialValuesDeposito, initialValuesRetiros, activeProvider, refRBSheet, activeType, allBalance, refRBSheetRetiros, navigation) => {

  const dispatch = useDispatch()
  const [index, setindex] = useState(1)
  const [toggleModel2, setToggleModel2] = useState(false);
  const [toggleModel3, setToggleModel3] = useState(false);


  if (activeType == "Deposito") {
    return (
      <>

        <Form style={{ marginTop: 1 }}>
          <TextInput style={defaultStyle.InputText1Style}
            label="Numero de Cuenta* (Celular)"
            value={initialValuesDeposito.Linea}
            mode='outlined'
            keyboardType="numeric"
            onChangeText={text => dispatch(billeterasActions.setInitialValuesDeposito({ ...initialValuesDeposito, "Linea": text }))}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
            editable={activeProvider.name ? true : false}
          />

          <TextInput
            label="Valor"
            value={initialValuesDeposito.Monto_Recargar}
            style={defaultStyle.InputText1Style}
            mode='outlined'
            keyboardType="numeric"
            onChangeText={text => dispatch(billeterasActions.setInitialValuesDeposito({ ...initialValuesDeposito, "Monto_Recargar": text }))}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
            editable={activeProvider.name ? true : false}
          />

          {/*         
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>

          <Button disabled={initialValuesDeposito.Linea !== '' && initialValuesDeposito.Monto_Recargar !== '' ? false : true}
            onPress={() => refRBSheet.current.open()}
            style={initialValuesDeposito.Linea !== '' && initialValuesDeposito.Monto_Recargar !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
            <Text style={{ color: '#ffff' }}>Recargas</Text>
          </Button>
        </View> */}
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
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center' }}>
                    Confirmar Compra
                 </Text>
                  <View style={styles.tophead}>
                    <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', letterSpacing: 0.5 }} >
                      Nequi Deposito
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
                      <Text style={defaultStyle.txt}>Documento:</Text>
                    </View>
                    <View style={defaultStyle.textTable1}>
                      <Text style={defaultStyle.txt}>{initialValuesDeposito.phone}</Text>
                    </View>
                  </View>


                  <View style={defaultStyle.container}>
                    <View
                      style={defaultStyle.textTable}>
                      <Text style={defaultStyle.txt}>Valor:</Text>
                    </View>
                    <View style={defaultStyle.textTable1}>
                      <Text style={defaultStyle.txt}>{initialValuesDeposito.amount}</Text>
                    </View>
                  </View>


                  <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                    <Button
                      onPress={() => {
                        setToggleModel2(true)
                        // navigation.navigate('Complete')
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

        </Form>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Modal width={380} height={400} visible={toggleModel2} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
            <ModalContent >
              <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={styles.bigLogo} source={bigLogo} />
                <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                  Verificación de seguridad</Text>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5 }}>
                  Para proteger su cuenta, complete la siguiente verificación.
                            </Text>
                {/* <TextInput
                  label="Numero Ceular"
                  value={number}
                  style={styles.textInput2}
                  mode='outlined'
                  keyboardType="numeric"
                  onChangeText={text => { setNumber(text) }}
                  theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                /> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', }}>
                  <TextInput
                    label="Clave Dinamica"
                    // value={number}
                    style={styles.textInput3}
                    mode='outlined'
                    keyboardType="numeric"
                    // onChangeText={text => { setNumber(text) }}
                    theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                  />
                  <TouchableOpacity
                    style={styles.btnTransfer2}>
                    <Text style={{ color: 'rgb(5,193,121)' }}>Enviar Clave</Text>
                  </TouchableOpacity>

                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Complete')
                    setToggleModel2(false)
                  }}
                  style={styles.btnTransfer}>
                  <Text style={{ color: '#ffff' }}>Enviar y Comprar</Text>
                </TouchableOpacity>
              </View>


            </ModalContent>
          </Modal>
        </TouchableWithoutFeedback>
      </>
    )

  }
  else {
    return (
      <>
        <Form style={{ marginTop: 1 }}>
          <TextInput style={defaultStyle.InputText1Style}
            label="Numero de Cuenta* (Celular)"
            value={initialValuesRetiros.Linea}
            mode='outlined'
            keyboardType="numeric"
            onChangeText={text => dispatch(billeterasActions.setinitialValuesRetiros({ ...initialValuesRetiros, "Linea": text }))}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
            editable={activeProvider.name ? true : false}
          />

          <TextInput
            label="Valor"
            value={initialValuesRetiros.Valor}
            style={defaultStyle.InputText1Style}
            mode='outlined'
            keyboardType="numeric"
            onChangeText={text => {
              dispatch(billeterasActions.setinitialValuesRetiros({ ...initialValuesRetiros, "Valor": text }))
            }}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
            editable={activeProvider.name ? true : false}


          />

          <TextInput
            label="Toquen NEQUI *"
            value={initialValuesRetiros.Toquen}
            style={defaultStyle.InputText1Style}
            mode='outlined'
            keyboardType="numeric"
            onChangeText={text => dispatch(billeterasActions.setinitialValuesRetiros({ ...initialValuesRetiros, "Toquen": text }))}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
            editable={activeProvider.name ? true : false}
          />


          <View>
            <RBSheet
              ref={refRBSheetRetiros}
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
                      <Text style={defaultStyle.txt}>{initialValuesRetiros.phone}</Text>
                    </View>
                  </View>


                  <View style={defaultStyle.container}>
                    <View
                      style={defaultStyle.textTable}>
                      <Text style={defaultStyle.txt}>Valor:</Text>
                    </View>
                    <View style={defaultStyle.textTable1}>
                      <Text style={defaultStyle.txt}>{initialValuesRetiros.amount}</Text>
                    </View>
                  </View>


                  <View style={defaultStyle.container}>
                    <View
                      style={defaultStyle.textTable}>
                      <Text style={defaultStyle.txt}>Origen:</Text>
                    </View>
                    <View style={defaultStyle.textTable1}>
                      <Text style={defaultStyle.txt}>Mi Caja</Text>
                      <Text style={defaultStyle.txt2}>Cambiar</Text>
                    </View>
                  </View>



                  <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                    <Button
                      onPress={() => {
                        setToggleModel3(true)
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

        </Form>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Modal width={380} height={400} visible={toggleModel3} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
            <ModalContent >
              <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={styles.bigLogo} source={bigLogo} />
                <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                  Verificación de seguridad</Text>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5 }}>
                  Para proteger su cuenta, complete la siguiente verificación.
                            </Text>
                {/* <TextInput
                  label="Numero Ceular"
                  value={number}
                  style={styles.textInput2}
                  mode='outlined'
                  keyboardType="numeric"
                  onChangeText={text => { setNumber(text) }}
                  theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                /> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', }}>
                  <TextInput
                    label="Clave Dinamica"
                    // value={number}
                    style={styles.textInput3}
                    mode='outlined'
                    keyboardType="numeric"
                    // onChangeText={text => { setNumber(text) }}
                    theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                  />
                  <TouchableOpacity
                    style={styles.btnTransfer2}>
                    <Text style={{ color: 'rgb(5,193,121)' }}>Enviar Clave</Text>
                  </TouchableOpacity>

                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Complete')
                    setToggleModel3(false)

                  }}
                  style={styles.btnTransfer}>
                  <Text style={{ color: '#ffff' }}>Enviar y Comprar</Text>
                </TouchableOpacity>
              </View>


            </ModalContent>
          </Modal>
        </TouchableWithoutFeedback>
      </>
    )
  }



}


const RecargasChange = ({ activeProvider, initialValuesDeposito, initialValuesRetiros, activeType, allBalance, navigation }) => {
  const refRBSheet = useRef();
  const refRBSheetRetiros = useRef()
  const [toggleModel1, setToggleModel1] = useState(false);


  return (
    <>
      <View style={styles.paymentContent}>
        {activeImageInputs(initialValuesDeposito, initialValuesRetiros, activeProvider, activeType)}
        <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
          Información de tu Cuenta :
            </Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
      </View>
      {renderInputs(initialValuesDeposito, initialValuesRetiros, activeProvider, refRBSheet, activeType, allBalance, refRBSheetRetiros, navigation)}

      <View style={styles.paymentContent}>
        {activeImageInputs(initialValuesDeposito, initialValuesRetiros, activeProvider, activeType)}
        <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
          Información de tu Cuenta :
        </Text>

      </View>
      {activeType == "Deposito" ?
        null
        :
        <CustomTapsBalance />

      }

      {activeType == "Deposito" ?
        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 40 }}>

          <Button disabled={initialValuesDeposito.Linea !== '' && initialValuesDeposito.Monto_Recargar !== '' ? false : true}
            onPress={() => {
              setToggleModel1(true)
              // refRBSheet.current.open()
            }}
            style={initialValuesDeposito.Linea !== '' && initialValuesDeposito.Monto_Recargar !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
            <Text style={{ color: '#ffff' }}>Recargas</Text>
          </Button>
        </View>
        :
        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 40 }}>

          <Button disabled={initialValuesRetiros.Linea !== '' && initialValuesRetiros.Valor !== '' && initialValuesRetiros.Toquen !== '' ? false : true}
            onPress={() => {
              setToggleModel1(true)
              // refRBSheetRetiros.current.open()
            }}
            style={initialValuesRetiros.Linea !== '' && initialValuesRetiros.Valor !== '' && initialValuesRetiros.Toquen !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
            <Text style={{ color: '#ffff' }}>Recargas</Text>
          </Button>
        </View>
      }


      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal width={380} height={400} visible={toggleModel1} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
          <ModalContent >
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Image style={styles.bigLogo} source={bigLogo} />

              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginTop: 70, marginBottom: 40, lineHeight: 23 }}>
                Recuerda que para una misma línea <Text style={{ color: 'red' }}>NEQUI</Text>, sólo podrás hacer <Text style={{ color: 'green' }}>4 transacciones</Text> diarias,
                sumando retiros y recargas,  evita
                bloqueo del producto!
                                        </Text>

              <Pressable onPress={() => {
                setToggleModel1(false)
                // navigation.navigate('Home')
                activeType == "Deposito" ?
                  refRBSheet.current.open()
                  :
                  refRBSheetRetiros.current.open()
              }}
                style={styles.btnTransfer}>
                <Text style={{ color: '#ffff' }}>Continuar</Text>
              </Pressable>
            </View>


          </ModalContent>
        </Modal>
      </TouchableWithoutFeedback>



    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: '3%',
  },
  textInput2: {
    marginVertical: '3%',
    width: '100%'
  },
  textInput3: {
    // marginVertical: 15,
    width: '58%',
    marginRight: '2%'
  },
  btnTransfer2: {
    marginTop: 5,
    height: 59,
    marginLeft: '2%',
    backgroundColor: 'white',
    width: '38%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(5,193,121)',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 15
  },
  btnTransfer: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 5,
    // width: '80%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40
  },
  btnTransfer: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 5,
    // width: '80%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40
  },
  bigLogo: {
    height: 64,
    width: 255,
  },
  CheckCircleOutline: {
    height: 80,
    width: 80,
    marginTop: 30
  },
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
  textTable1: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    width: '50%',
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

const mapStateToProps = ({ balance, billeteras, recargas }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: billeteras.activeProvider,
  initialValuesDeposito: billeteras.initialValuesDeposito,
  initialValuesRetiros: billeteras.initialValuesRetiros,
  activeType: billeteras.activeType


})


export default connect(mapStateToProps, null)(RecargasChange);







