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
import { clientsData, userData } from '../transactions/pachageData';
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
        <ScrollView
          style={{
            marginTop: '5%',
            width: '100%'
          }}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            style={{ width: 800 }}
            horizontal={false}
            // numColumns={1}
            ItemSeparatorComponent={() => {
              return (
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'grey', marginVertical: 2 }}>
                </View>
              )
            }}
            ListHeaderComponent={() => {
              return (
                <View
                  style={styles2.headerStyle}
                >
                  <Text
                    style={{ ...styles2.headerText,marginLeft: 20, marginRight: 65 }}
                  >ID</Text>
                  <Text
                    style={{ ...styles2.headerText, marginRight: 45 }}
                  >Asociar</Text>
                  <Text
                    style={{ ...styles2.headerText, marginRight: 70 }}
                  >Nombre</Text>
                  <Text
                    style={{ ...styles2.headerText, marginRight: 75 }}
                  >Usuario</Text>
                  <Text
                    style={{ ...styles2.headerText, marginRight: 35 }}
                  >Estado</Text>
                  <Text
                    style={{ ...styles2.headerText, marginRight: 30 }}
                  >Coord</Text>
                  <Text
                    style={{ ...styles2.headerText, marginRight: 45 }}
                  >Comisión</Text>
                  <Text
                    style={{ ...styles2.headerText, marginRight: 20 }}
                  >Borrar</Text>
                </View>
              )
            }}
            data={clientsData}
            renderItem={({ item, index }) => (
              <View>
                <TouchableOpacity
                  key={index}
                  style={styles2.listHeaderStyle}
                // onPress={navigation.navigate('TransactionsDetails')}
                >
                  <Text
                    style={{ ...styles2.listText, textDecorationLine: 'underline' }}
                  >{item.ID}</Text>
                  <Image style={{ marginTop: -7, marginLeft: -13, marginBottom: -15}} source={item.Asociar} />
                  <Text
                    style={{ ...styles2.listText, textDecorationLine: 'underline' }}
                  >{item.Nombre}</Text>
                  <Text
                    style={{ ...styles2.listText, color: 'rgb(51,103,214)', textDecorationLine: 'underline' }}
                  >{item.Usuario}</Text>
                
                  <Image style={{ marginLeft: 20 }} source={item.Estado} />
                  <Image style={{ marginLeft: 20 }} source={item.Coord} />
                  <Text
                    style={styles2.listText}
                  >{item.Comisión}</Text>
                  <Image style={{ marginLeft: 20 }} source={item.Borrar} />

                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      </>
    )
  }
  else {
    return (
      <>
        <ScrollView
          style={{
            marginTop: '5%',
            width: '100%'
          }}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            style={{ width: 800 }}
            horizontal={false}
            // numColumns={1}
            ItemSeparatorComponent={() => {
              return (
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'grey', marginVertical: 2 }}>
                </View>
              )
            }}
            ListHeaderComponent={() => {
              return (
                <View
                  style={styles.headerStyle}
                >
                  <Text
                    style={{ ...styles.headerText, marginRight: 45 }}
                  >Editar</Text>
                  <Text
                    style={{ ...styles.headerText, marginRight: 70 }}
                  >Usuario</Text>
                  <Text
                    style={{ ...styles.headerText, marginRight: 110 }}
                  >Perfil</Text>
                  <Text
                    style={{ ...styles.headerText, marginRight: 130 }}
                  >Correo</Text>
                  <Text
                    style={{ ...styles.headerText, marginRight: 70 }}
                  >Estado</Text>
                  <Text
                    style={{ ...styles.headerText, marginRight: 20 }}
                  >Coord</Text>
                  <Text
                    style={{ ...styles.headerText, marginRight: 20 }}
                  >Borrar</Text>

                </View>
              )
            }}
            data={userData}
            renderItem={({ item, index }) => (
              <View>
                <TouchableOpacity
                  key={index}
                  style={styles.listHeaderStyle}
                // onPress={navigation.navigate('TransactionsDetails')}
                >
                  <Image source={item.icon} />
                  <Text
                    style={{ ...styles.listText, textDecorationLine: 'underline' }}
                  >{item.Usuario}</Text>

                  <Text
                    style={{ ...styles.listText, color: 'rgb(51,103,214)', textDecorationLine: 'underline' }}
                  >{item.Perfil}</Text>
                  <Text
                    style={styles.listText}
                  >{item.Correo}</Text>
                  <Text
                    style={styles.listText}
                  >{item.Padre}</Text>

                  <Image style={{ marginLeft: 20 }} source={item.Coord} />
                  <Image style={{ marginLeft: 20 }} source={item.Borrar} />

                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>


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

  container: {
    flex: 1,
  },

  test: {
    backgroundColor: 'rgb(216,216, 216)',

  },

  Contentcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
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
    alignItems: 'center',
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
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center'


  },

  paymentText: {
    fontWeight: "bold",
    marginLeft: 5
  },



  headerStyle: {
    width: '180%',
    backgroundColor: 'rgb(57,72,93)',
    flexDirection: 'row',
    paddingHorizontal: '2%',
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
    fontSize: 15,
    marginHorizontal: 5
  },
  listHeaderStyle: {
    // backgroundColor: 'rgb(57,72,93)',

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '2%'

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
  }

});

const styles2 = StyleSheet.create({

  container: {
    flex: 1,
  },

  test: {
    backgroundColor: 'rgb(216,216, 216)',

  },

  Contentcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
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
    alignItems: 'center',
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
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center'


  },

  paymentText: {
    fontWeight: "bold",
    marginLeft: 5
  },



  headerStyle: {
    width: '180%',
    backgroundColor: 'rgb(57,72,93)',
    flexDirection: 'row',
    paddingHorizontal: '2%',
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
    fontSize: 15,
    marginHorizontal: 5
  },
  listHeaderStyle: {
    // backgroundColor: 'rgb(57,72,93)',

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
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
  }

});

const mapStateToProps = ({ balance, product, recargas }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: product.activeProvider,
  RecargasActiveType: recargas.activeType,
  activePackage: recargas.activePackage

})


export default connect(mapStateToProps, null)(RecargasChange);







