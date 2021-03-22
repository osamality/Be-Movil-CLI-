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
        editable={activeProvider.name ? true : false}
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
        editable={activeProvider.name ? true : false}
      />

      {/* <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
        <Button disabled={initialValues.phone !== '' && initialValues.amount !== '' ? false : true}
          onPress={() => refRBSheet.current.open()}
          style={initialValues.phone !== '' && initialValues.amount !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
          <Text style={{ color: '#ffff' }}>Recargas</Text>
        </Button>
      </View> */}

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
        editable={activeProvider.name ? true : false}
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
        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, "movil")}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Linea a Recargar:
            </Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
        </View>
        {renderInputs(initialValues, setInitialVales, activeProvider, refRBSheet)}

        <FlatList
          scrollEnabled={false}
          horizontal
          data={packagesBottom}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={styles.content}>
              <Text style={styles.Text}> {item.pak}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, "package")}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Paquetes de Consumo:
            </Text>
        </View>

        <CustomTapsBalance navigation={navigation} />

        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 40 }}>
          <Button disabled={initialValues.phone !== '' && initialValues.amount !== '' ? false : true}
            onPress={() => {
              refRBSheet.current.open()
            }}
            style={initialValues.phone !== '' && initialValues.amount !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
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


      </>
    )
  }
  else {
    return (
      <>
        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, "package")}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Paquetes de Consumo:
            </Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
        </View>
        {renderPackage(activePackage, navigation, activeProvider)}

        {renderInputsPackage(InitialValesPackage, setInitialValesPackage, activeProvider, refRBSheet)}

        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, "package")}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Método de Pago
          </Text>
        </View>

        <CustomTapsBalance navigation={navigation} />

        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 40 }}>
          <Button disabled={InitialValesPackage.phone !== '' ? false : true}
            onPress={() => refRBSheet.current.open()}
            style={InitialValesPackage.phone !== '' && activeProvider.name ? defaultStyle.buttonactive : defaultStyle.btn}>
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
                    <Text onPress={() =>{
                      refRBSheet.current.close()
                      
                      navigation.navigate('Confirmar')}} style={defaultStyle.txt2}>Cambiar</Text>
                  </View>
                </View>


                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  <Button
                    onPress={() => {
                      navigation.navigate('Complete')
                      refRBSheet.current.close()
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

  Contentcontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: 8,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 0,
    margin: 13,
  },
  ItemContent: {
    // width:50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  Text: {
    textAlign: 'center',
    width: 100,
    fontSize: 11,
    marginTop: 7,
    flex: 1,
    flexWrap: 'nowrap',
    color: 'black',
    lineHeight: 17
  },
  headerStyle: {
    // width: '180%',
    backgroundColor: 'rgb(57,72,93)',
    flexDirection: 'row',
    paddingHorizontal: '10%',
    paddingVertical: '1%'
  },
  headerStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '56%',
  },
  headerText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15
  },
  listText: {
    fontWeight: '300',
    fontSize: 14,
    marginHorizontal: 10,
    borderBottomWidth: 1, borderBottomColor: 'rgb(216,216,216)',
    paddingBottom: '1%',
  },
  listHeaderStyle: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(216,216,216)'
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
  greenText: {
    color: 'rgb(5,193,121)'
  },
  titleModal2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(225,6,52)',
    height: 90,
    paddingTop: '6%'
  },
  closeBtn: {
    color: '#ffff',
    textAlign: 'left',
    width: '8%',
    marginTop: 6
  },
  Modaltitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  },
  bigLogo: {
    marginVertical: 15,
    height: 55,
    width: 220,
  },
  greenback: {
    backgroundColor: 'rgb(5,193,121)',
    width: width,
    flexDirection: 'row',
  },
  blueback: {
    backgroundColor: 'rgb(57,72,93)',
    width: width,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  CheckCircle: {
    height: 30,
    width: 30,
    tintColor: 'white',
    marginVertical: 12,
    marginRight: '10%',
    marginLeft: 30
  },
  innerView: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(195,195,195)',
    borderBottomWidth: 0.5,
  },
  innerText: {
    marginVertical: 17,
    marginHorizontal: '5%'
  },
  btmText1: {
    marginTop: 15,
    marginHorizontal: '5%'
  },
  btmText: {
    marginTop: 6,
    marginHorizontal: '5%'
  },
  TextIcon: {
    textAlign: 'center',
    width: 50,
    fontSize: 13,
    marginTop: 8,
    flex: 1,
    flexWrap: 'nowrap',
    color: '#ffff',
  },
  iconBtm: {
    marginTop: 5,
    height: 18,
    width: 20
  },
  productContent: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 8,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  btmContent: {
    flexDirection: 'column',
    height: 65,
    marginHorizontal: 16,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 25,
    elevation: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 10
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







