import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import { Form, Button } from 'native-base';
import { TextInput, Checkbox } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/FontAwesome5';
import arrowImage from '../../assets/Images/arrowBottm3.png';
import arrowF from '../../assets/Images/arrowF.png';
import arrowB from '../../assets/Images/arrowB.png';
import arrowFF from '../../assets/Images/arrowFF.png';
import arrowBB from '../../assets/Images/arrowBB.png';
import bigLogo from '../../assets/Images/bigLogo.png'
import CheckCircleOutline from '../../assets/Images/CheckCircleOutline.png';
import notactiveImage from '../../assets/Images/notactive.png';

import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import { isEmpty } from 'lodash';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const activeImageInputs = (initialValues, activeProvider, type) => {

  if (isEmpty(activeProvider)) {
    return <Image source={notactiveImage} />

  }
  else {
    if (type == "movil") {

      if (initialValues.phone == '' || initialValues.amount == '') {
        return <Image source={beImg} />
      }
      else {
        return <Image source={beactiveImg} />

      }
    }
    else {
      if (initialValues.phone == '' || initialValues.amount == '') {
        return <Image source={beImg} />
      }
      else {
        return <Image source={beactiveImg} />

      }

    }

  }

}


const renderInputs = (initialValues, setInitialVales, activeProvider, refRBSheet, checked, setChecked, checked1, setChecked1, checked2, setChecked2, checked3, setChecked3) => {

  return (

    <Form style={{ marginTop: 5 }}>
      <TextInput style={defaultStyle.InputText1Style}
        label="Phone number"
        value={initialValues.phone}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => setInitialVales({ ...initialValues, phone: text })}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
      // editable={activeProvider.name ? true : false}
      />

      <TextInput
        label="Amount"
        value={initialValues.amount}
        style={defaultStyle.InputText1Style}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => setInitialVales({ ...initialValues, amount: text })}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
      // editable={activeProvider.name ? true : false}
      >

      </TextInput>


      <Text style={{ ...styles.txtBoxText, marginRight: 4, fontWeight: '500' }}>
        Bolsa Origen: (Envía)
        </Text>
      <View style={defaultStyle.checkBoxViewUp}>
        <Image source={arrowF} style={styles.Image2} />
        <View style={checked ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>
          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Caja
        </Text>
        </View>
        <View style={checked1 ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>

          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked1(!checked1);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Ahorro
        </Text>
        </View>
      </View>
      <Text style={{ ...styles.txtBoxText, marginRight: 4, fontWeight: '500' }}>
        Bolsa Destino: (Recibe)
    </Text>

      <View style={defaultStyle.checkBoxViewUp}>
        <Image source={arrowB} style={styles.Image2} />
        <View style={checked2 ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>

          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Caja
        </Text>
        </View>
        <View style={checked3 ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>

          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked3 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked3(!checked3);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Ahorro
        </Text>
        </View>
      </View>


      <TextInput
        label="Valor"
        value={initialValues.amount}
        style={defaultStyle.InputText1Style}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => setInitialVales({ ...initialValues, amount: text })}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
      // editable={activeProvider.name ? true : false}
      ></TextInput>
      <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>

        <Button disabled={initialValues.phone !== '' && initialValues.amount !== '' ? false : true}
          onPress={() => {
            refRBSheet.current.open()
          }}
          style={initialValues.phone !== '' && initialValues.amount !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
          <Text style={{ color: '#ffff' }}>Continuar</Text>
        </Button>
      </View>

    </Form>

  )

}

const renderInputsPackage = (InitialValesPackage, setInitialValesPackage, activeProvider, refRBSheet, checked, setChecked, checked1, setChecked1, checked2, setChecked2, checked3, setChecked3) => {
  return (
    <Form style={{ marginTop: 5 }}>
      <TextInput style={defaultStyle.InputText1Style}
        label="Cliente"
        value={InitialValesPackage.phone}
        mode='outlined'
        keyboardType="numeric" 
        onChangeText={text => setInitialValesPackage({ ...InitialValesPackage, phone: text })}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
      // editable={activeProvider.name ? true : false}
      />




      <Text style={{ ...styles.txtBoxText, marginRight: 4, fontWeight: '500' }}>
        Bolsa Origen: (Envía)
        </Text>
      <View style={defaultStyle.checkBoxViewUp}>
        <Image source={arrowF} style={styles.Image2} />
        <View style={checked ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>
          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Caja
        </Text>
        </View>
        <View style={checked1 ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>

          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked1(!checked1);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Ahorro
        </Text>
        </View>
      </View>
      <Text style={{ ...styles.txtBoxText, marginRight: 4, fontWeight: '500' }}>
        Bolsa Destino: (Recibe)
    </Text>

      <View style={defaultStyle.checkBoxViewUp}>
        <Image source={arrowB} style={styles.Image2} />
        <View style={checked2 ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>

          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Caja
        </Text>
        </View>
        <View style={checked3 ? defaultStyle.checkBoxView : defaultStyle.checkBoxViewActive}>

          <Checkbox.Android
            color={'white'}
            uncheckedColor={'grey'}
            status={checked3 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked3(!checked3);
            }}
          />
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: '500' }}>
            Mi Ahorro
        </Text>
        </View>
      </View>


      <TextInput
        label="Valor"
        value={InitialValesPackage.amount}
        style={defaultStyle.InputText1Style}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => setInitialValesPackage({ ...InitialValesPackage, amount: text })}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
      // editable={activeProvider.name ? true : false}
      ></TextInput>
      <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>

        <Button disabled={InitialValesPackage.phone !== '' && InitialValesPackage.amount !== '' ? false : true}
          onPress={() => refRBSheet.current.open()}
          style={InitialValesPackage.phone !== '' && InitialValesPackage.amount !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
          <Text style={{ color: '#ffff' }}>Continuar</Text>
        </Button>
      </View>

    </Form>
  )
}


const handelType = (RecargasActiveType,
  initialValues,
  setInitialVales,
  activeProvider,
  refRBSheet,
  InitialValesPackage,
  setInitialValesPackage,
  navigation,
  activePackage,
  allBalance
) => {
  const [index, setindex] = useState(0)
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);


  const [toggleModel1, setToggleModel1] = useState(false);
  const [toggleModel2, setToggleModel2] = useState(false);



  if (RecargasActiveType == "Recargas") {
    return (
      <>
        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, "movil")}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Escoje tu Operador:
            </Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
        </View>
        {renderInputs(initialValues, setInitialVales, activeProvider, refRBSheet, checked, setChecked, checked1, setChecked1, checked2, setChecked2, checked3, setChecked3)}
        <View
          style={{ backgroundColor: 'green' }}
        >
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
                // flex:1,
                alignItems: 'center',
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
                    Traslado de Saldo
                 </Text>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Producto::</Text>
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>{activeProvider.name}</Text>
                  </View>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Cliente:</Text>
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>{initialValues.phone}</Text>
                  </View>
                </View>



                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Origen:</Text>
                    <Image style={{ height: 20, width: 30, marginLeft: 10 }} source={arrowFF} />
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>Mi Caja</Text>
                    <Text style={defaultStyle.txt2}>Cambiar</Text>
                  </View>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Destino::</Text>
                    <Image style={{ height: 20, width: 30 }} source={arrowBB} />
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>Mi Caja</Text>
                    <Text style={defaultStyle.txt2}>Cambiar</Text>
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
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <Button
                    style={defaultStyle.accecptBtn}
                    onPress={() => {
                      refRBSheet.current.close()
                      setToggleModel1(true)
                    }}
                  >
                    <Text style={{ color: '#ffff', fontSize: 17, }}>Realizar Reparto</Text>
                  </Button>
                </View>

                <View style={{ marginTop: 2 }}>

                </View>
              </View>
            </ScrollView>
          </RBSheet>

        </View>


        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Modal width={380} height={400} visible={toggleModel1} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
            <ModalContent >
              <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={styles.bigLogo} source={bigLogo} />
                <Image style={styles.CheckCircleOutline} source={CheckCircleOutline} />
                <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                  Reparto Satisfactorio</Text>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5 }}>
                  Perfil Creado Satisfactoriamente
                            </Text>
                <Text style={{ fontSize: 12, color: 'rgb(5,193,121)', textAlign: 'center', fontWeight: '500' }}>
                  Perfil 2021</Text>
                <TouchableOpacity
                  onPress={() => {

                    setToggleModel1(false)
                  }}
                  style={styles.btnTransfer}>
                  <Text style={{ color: '#ffff' }}>Terminar</Text>
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
        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, "package")}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Reversión de Saldo:
            </Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
        </View>
        {/* {renderPackage(activePackage, navigation, activeProvider)} */}

        {renderInputsPackage(InitialValesPackage, setInitialValesPackage, activeProvider, refRBSheet, checked, setChecked, checked1, setChecked1, checked2, setChecked2, checked3, setChecked3)}
        <View
          style={{ backgroundColor: 'green' }}
        >
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
                // flex:1,
                alignItems: 'center',
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
                    Traslado de Saldo
                 </Text>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Producto::</Text>
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>{activeProvider.name}</Text>
                  </View>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Cliente:</Text>
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>{initialValues.phone}</Text>
                  </View>
                </View>



                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Origen:</Text>
                    <Image style={{ height: 20, width: 30, marginLeft: 10 }} source={arrowFF} />
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>Mi Caja</Text>
                    <Text style={defaultStyle.txt2}>Cambiar</Text>
                  </View>
                </View>
                <View style={defaultStyle.container}>
                  <View
                    style={defaultStyle.textTable}>
                    <Text style={defaultStyle.txt}>Destino::</Text>
                    <Image style={{ height: 20, width: 30 }} source={arrowBB} />
                  </View>
                  <View style={defaultStyle.textTable1}>
                    <Text style={defaultStyle.txt}>Mi Caja</Text>
                    <Text style={defaultStyle.txt2}>Cambiar</Text>

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
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <Button
                    style={defaultStyle.accecptBtn}
                    onPress={() => {
                      refRBSheet.current.close()
                      setToggleModel1(true)
                    }}
                  >
                    <Text style={{ color: '#ffff', fontSize: 17, }}>Realizar Reparto</Text>
                  </Button>
                </View>

                <View style={{ marginTop: 2 }}>

                </View>
              </View>
            </ScrollView>
          </RBSheet>

        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Modal width={380} height={400} visible={toggleModel2} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
            <ModalContent >
              <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Image style={styles.bigLogo} source={bigLogo} />
                <Image style={styles.CheckCircleOutline} source={CheckCircleOutline} />
                <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                  Reparto Satisfactorio</Text>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5 }}>
                  Perfil Creado Satisfactoriamente
                </Text>
                <Text style={{ fontSize: 12, color: 'rgb(5,193,121)', textAlign: 'center', fontWeight: '500' }}>
                  Perfil 2021</Text>
                <TouchableOpacity
                  onPress={() => {
                    setToggleModel2(false)
                  }}
                  style={styles.btnTransfer}>
                  <Text style={{ color: '#ffff' }}>Terminar</Text>
                </TouchableOpacity>
              </View>


            </ModalContent>
          </Modal>
        </TouchableWithoutFeedback>

      </>

    )
  }
}
const RecargasChange = ({ RecargasActiveType, activeProvider, navigation, activePackage, allBalance }) => {
  const refRBSheet = useRef();

  const [initialValues, setInitialVales] = useState({
    phone: '',
    amount: ''
  })

  const [initialValuesPackage, setInitialValesPackage] = useState({
    phone: '',
  })


  return (
    <>
      {handelType(RecargasActiveType,
        initialValues,
        setInitialVales,
        activeProvider,
        refRBSheet,
        initialValuesPackage,
        setInitialValesPackage,
        navigation,
        activePackage,
        allBalance

      )}
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
  txtBoxText: {
    fontWeight: "bold",
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
  packagesDone: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    padding: 10,

    //   height:53,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 25,
    elevation: 8,
    borderRadius: 8,
    backgroundColor: "rgb(255,255,255)",
    // borderRadius:10,
    borderColor: '#ffff',
    textAlign: 'center'
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
  },
  Image2: {
    width: 23,
    height: 23,
  },
  tophead: {
    backgroundColor: 'rgb(235,6,42)',
    width: width,
    marginTop: '2%',
    paddingVertical: '2%'
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
    // backgroundColor: 'rgb(103 ,103 ,103)',
    backgroundColor: 'red',

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
    margin: 10,
    backgroundColor: 'rgb(235,6,42)',
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
  checkBoxView: {
    marginLeft: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgb(155,156,152)',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(5,193,121)'

  },
  checkBoxViewActive: {
    marginLeft: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgb(155,156,152)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxViewUp: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '6%',
    marginVertical: '5%'
  },


})

const mapStateToProps = ({ balance, product, recargas }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: product.activeProvider,
  RecargasActiveType: recargas.activeType,
  activePackage: recargas.activePackage

})


export default connect(mapStateToProps, null)(RecargasChange);







