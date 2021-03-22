import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import { Form, Button } from 'native-base';
import { TextInput } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/FontAwesome5';
import arrowImage from '../../assets/Images/arrowBottm3.png';
import notactiveImage from '../../assets/Images/notactive.png';
import { isEmpty } from 'lodash';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import { FlatList } from 'react-native-gesture-handler';
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const packagesBottom = [{ pak: '1000' }, { pak: '2000' }, { pak: '5000' }, { pak: '10000' }, { pak: '20000' },]
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


const renderInputs = (initialValues, setInitialVales, activeProvider, refRBSheet) => {
  const [toggleModel, setToggle] = useState(false)

  return (
    <>
      <Form style={{ marginTop: 15, marginBottom: 65 }}>

        <View
          style={styles.headerStyle}
        >

          <Text
            style={{ ...styles.headerText, }}
          >Usuario Nuevo</Text>

        </View>
        <View>
          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Nombre</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >Nicole</Text>
          </View>

          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Apellido</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >Hamilton Federer</Text>
          </View>

          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Documento</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >CC  1.144.060.844</Text>
          </View>

          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Departmento</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >Valle Cauca</Text>
          </View>


          
          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Ciudad</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >Cali</Text>
          </View>


          
          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Email</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >hello@tuempresa.com</Text>
          </View>



          
          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Perfil Asignado</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >Mi Perfil 2021</Text>
          </View>



          
          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Usuario</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >javierdiseño</Text>
          </View>



          
          <View
            style={styles.listHeaderStyle}
          >
            <Text
              style={{ ...styles.listText, backgroundColor: 'rgb(245,245,245)', padding: 17, width: '40%', textAlign: 'left' }}
            >Contraseña</Text>
            <Text
              style={{ ...styles.listText, backgroundColor: 'white', padding: 17, textAlign: 'left' }}
            >************</Text>
          </View>
        </View>
      </Form>
      <Modal

        width={350}
        height={260}
        visible={toggleModel}
        modalAnimation={new SlideAnimation({
          slideFrom: 'top',
        })}>

        <ModalContent>
          <View style={{ flexDirection: 'row', backgroundColor: 'red', padding: 10, margin: -24 }}>
            <Text style={{ margin: 5, marginLeft: 90, color: 'white', fontSize: 20, fontWeight: '400' }}>Tipo de Comercio</Text>
            <TouchableOpacity onPress={() => setToggle(false)}>
              <Text style={{ marginLeft: 58, marginTop: -3, fontSize: 29, color: 'white', fontWeight: '700' }}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 24 }}>
            <View style={styles.togglee}>
              <Text onPress={() => setToggle(false)} style={{ margin: 5, color: 'black', fontSize: 18, fontWeight: '400' }}>Full Perfil</Text>
            </View>
            <View style={styles.togglee}>
              <Text onPress={() => setToggle(false)} style={{ margin: 5, color: 'black', fontSize: 18, fontWeight: '400' }}>Perfil Asistente</Text>
            </View>
            <View style={styles.togglee}>
              <Text onPress={() => setToggle(false)} style={{ margin: 5, color: 'black', fontSize: 18, fontWeight: '400' }}>Perfil Avanzado</Text>
            </View>
            <View style={styles.togglee}>
              <Text onPress={() => setToggle(false)} style={{ margin: 5, color: 'black', fontSize: 18, fontWeight: '400' }}>Mi perfil 2021</Text>
            </View>
          </View>


        </ModalContent>

      </Modal>
    </>
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

  if (RecargasActiveType == "Recargas") {
    return (
      <>
        <View style={{ marginTop: 10 }}>
        </View>
        {renderInputs(initialValues, setInitialVales, activeProvider, refRBSheet)}

        {/* <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>
          <Button
            // disabled={initialValues.phone !== '' && initialValues.amount !== '' ? false : true}
            onPress={() => refRBSheet.current.open()}
            style={ defaultStyle.btn}>
            <Text style={{ color: '#ffff' }}>Recargas</Text>
          </Button>
        </View> */}
      </>
    )
  }
  else {
    return (
      <>
        <View style={{ marginTop: 10 }}>
        </View>
        {renderInputs(initialValues, setInitialVales, activeProvider, refRBSheet)}

        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>
          <Button
            // disabled={initialValues.phone !== '' && initialValues.amount !== '' ? false : true}
            // onPress={() => refRBSheet.current.open()}
            style={initialValues.phone !== '' && initialValues.amount !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
            <Text style={{ color: '#ffff' }}>Recargas</Text>
          </Button>
        </View>
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


  headerStyle: {
    width: '180%',
    backgroundColor: 'rgb(57,72,93)',
    flexDirection: 'row',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '56%',
  },
  headerText: {
    width: '100%',
    alignSelf: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 300
  },
  listText: {
    fontWeight: '300',
    fontSize: 15,
  },
  listHeaderStyle: {
    // backgroundColor: 'rgb(57,72,93)',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',


  },
  listHeaderStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    alignItems: 'center',
    paddingHorizontal: '6%'
  },
  listHeaderText: {
    color: 'black',
    fontWeight: '300',
    fontSize: 13
  },
  item: {
    flexDirection: 'row',
  },
  icon: {
    height: 16,
    width: 16,
    marginRight: '1%'
  },
  togglee: { borderBottomWidth: 0.5, borderBottomColor: 'grey', flexDirection: 'row', backgroundColor: 'white', padding: 10, marginHorizontal: -24, marginTop: 0, alignItems: 'center', alignContent: 'center', justifyContent: 'center' },
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
const PopUpStyle = StyleSheet.create({
  InputText1Style: {
    backgroundColor: '#fff',
    // paddingBottom:20,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    elevation: 2,
    // position: 'relative',
    height: 39,
    width: 375,
    marginBottom: 20
    // marginLeft:5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%'
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
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(232,232,232)'
  },
  textTable1: {
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#0000',
    width: '60%',
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

const mapStateToProps = ({ balance, product, recargas }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: product.activeProvider,
  RecargasActiveType: recargas.activeType,
  activePackage: recargas.activePackage

})


export default connect(mapStateToProps, null)(RecargasChange);







