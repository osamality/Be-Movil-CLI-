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

  return (
    <Form style={{ marginTop: 5 }}>
      <TextInput style={defaultStyle.InputText1Style}
        label="Nombres"
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

      <TextInput style={defaultStyle.InputText1Style}
        label="Apellidos"
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
        label="Numero de Indetidad"
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
      />


      <TextInput
        label="Departamento"
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
      />

      <TextInput
        label="Ciudad"
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
      />


      <TextInput
        label="Celular"
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
      />

      <TextInput
        label="Email"
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
      />


      <TextInput
        label="Confirmar Email"
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
      />
    </Form>
  )

}

const renderInputsPackage = (InitialValesPackage, setInitialValesPackage, activeProvider, refRBSheet) => {
  return (
    <Form style={{ marginTop: 5 }}>
      <TextInput style={defaultStyle.InputText1Style}
        label="Phone number"
        value={InitialValesPackage.phone}
        mode='outlined'
        keyboardType="numeric"
        onChangeText={text => setInitialValesPackage({ ...InitialValesPackage, phone: text })}
        underlineColor='transparent'
        underlineColorAndroid={'rgba(0,0,0,0)'}
        text='white'
        direction='rtl'
        theme={{ colors: { primary: 'rgb(177,177,177)', underlineColor: 'transparent', background: '#003489' } }}
      // editable={activeProvider.name ? true : false}
      />






    </Form>
  )
}

const renderPackage = (activePackage, navigation, activeProvider) => {

  if (isEmpty(activePackage)) {
    return (
      <TouchableOpacity
        style={activeProvider.name ? styles.packages : styles.notactivePackages}
        onPress={() => navigation.navigate('Package')}
        disabled={activeProvider.name ? false : true}
      >
        <View style={styles.DownloadIcon}>
          <Image source={arrowImage} style={styles.Image} />
        </View>
        <Text style={{ color: '#ffff' }}>
          Selecciona tu Paquete
        </Text>
        <Icon name="chevron-down" size={15} color="#ffff" />
      </TouchableOpacity>
    )
  }
  else {
    return (
      <TouchableOpacity
        style={styles.packagesDone}
        onPress={() => navigation.navigate('Package')}
      >
        {/* <View style={styles.DownloadIcon}>
             <Image source={arrowImage} style={styles.Image}/>
         </View> */}
        <View style={{ marginHorizontal: 5 }}>
          <Text style={{ color: 'rgb(235,6,42)', fontSize: 14, fontWeight: 'bold', marginVertical: 2 }}>{activePackage.name}</Text>
          <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 12, marginVertical: 2 }}>{activePackage.price} COP</Text>
          <Text style={{ textAlign: 'left', fontSize: 10, marginVertical: 2 }}>{activePackage.description}</Text>
        </View>

        <Icon name="chevron-down" size={15} color="black" />
      </TouchableOpacity>
      // <View>


      // </View>
    )

  }
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

        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>
          <Button
            // disabled={initialValues.phone !== '' && initialValues.amount !== '' ? false : true}
            onPress={() => refRBSheet.current.open()}
            style={ defaultStyle.btn}>
            <Text style={{ color: '#ffff' }}>Recargas</Text>
          </Button>
        </View>
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







