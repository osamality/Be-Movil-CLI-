import React, { useState, useRef } from 'react';
import { StyleSheet, Image, Text, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Container, Content, Form, Button } from 'native-base';
import { TextInput, } from 'react-native-paper'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderReportes from '../layout/HeaderReportes';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import reportlogo from '../../assets/Images/reportlogo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";


const Reportes = props => {
  const [states, setStates] = useState([])
  const refRBSheet = useRef();

  const [selectedView, setSelectedView] = useState()


  const activeImage = () => {
    // if (!isEmpty(activeProvider)) {
    return <Image source={beactiveImg} />
    // }
    // else {
    //   return <Image source={beImg} />
    // }
  }



  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container >
          <HeaderReportes />

          <Content style={{ flex: 1 }}>

            <View style={styles.Contentcontainer}>
              <View style={{ width: '95%', }}>

                <View
                  style={{ maxHeight: 500, overflow: "scroll", marginLeft: 9 }}
                >
                  <TextInput style={defaultStyle.InputText1Style}
                    label="Reporte"
                    value={states}
                    mode='outlined'
                    // onChangeText={text => setFieldValue("Apellido",text)}
                    underlineColor='transparent'
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    text='white'
                    direction='rtl'
                    theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}
                    editable={false}
                    onPress={() => refRBSheet.current.open()}
                    left={<TextInput.Icon
                      style={{ marginTop: 10 }}
                      color="grey"
                      onPress={() => refRBSheet.current.open()}

                      name={"card-search"}
                    />}
                    right={<TextInput.Icon
                      style={{ marginTop: 10 }}
                      color="grey"
                      onPress={() => refRBSheet.current.open()}

                      name="chevron-down"
                    />}

                  />

                </View>

                <View style={styles.paymentContent}>
                  {activeImage()}
                  <Text style={{ ...styles.paymentText, marginRight: 5, fontWeight: 'bold' }}>
                    Choose Provider:
               </Text>
                  {
                    <Text style={{ color: 'rgb(44,209,158)', fontWeight: 'bold' }}>
                      {/* {activeProvider.name} */}
                    Hasta 5 Días
                  </Text>
                  }
                </View>
                <View style={{
                  borderBottomWidth: 1, borderBottomColor: 'black', marginHorizontal: 13,
                  marginBottom: 15, marginTop: 10
                }}>
                </View>

                <View
                  style={{ flexDirection: 'row' }}


                >

                  <View style={{ width: '42%' }}>
                    <View><Text style={{ marginLeft: 10 }}>Desde:</Text>
                      <TextInput style={defaultStyle.InputText1Style2}
                        value={states}
                        mode='outlined'
                        // onChangeText={text => setFieldValue("Apellido",text)}
                        underlineColor='transparent'
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        text='white'
                        direction='rtl'
                        theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}
                        // editable={false}
                        // onTouchStart={showMenu}
                        left={<TextInput.Icon
                          style={{ marginTop: 14 }}
                          color="black"
                          // onPress={showMenu}
                          name={"calendar-blank"}
                        />}
                      />
                    </View>
                  </View>
                  <View style={{ width: '42%' }}>
                    <View><Text style={{ marginLeft: 10 }}>Hasta:</Text>
                      <TextInput
                        style={defaultStyle.InputText1Style2}
                        // placeholder="dd/mm/aaaa"
                        value={states}
                        mode='outlined'
                        // onChangeText={text => setFieldValue("Apellido",text)}
                        underlineColor='transparent'
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        text='white'
                        direction='rtl'
                        theme={{ colors: { primary: 'black', underlineColor: 'transparent', background: '#003489' } }}
                        // onTouchStart={showMenu}
                        left={<TextInput.Icon
                          style={{ marginTop: 14 }}
                          color="black"
                          // onPress={showMenu}
                          name={"calendar-blank"}
                        />}
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      height: 43,
                      // width:"100%",
                      marginHorizontal: 4,
                      marginVertical: 22,
                      borderRadius: 5,
                      width: 46,
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center', marginTop: '35%' }}>
                <Image source={reportlogo} style={{ height: 110, width: 90 }} />
                <Text style={{ color: 'black', fontSize: 22, fontWeight: '500', margin: 10 }}>No se han generado Reportes</Text>

              </View>




            </View>

          </Content>

        </Container>

      </TouchableWithoutFeedback>

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

              </View>
              <View style={defaultStyle.container}>
                <View
                  style={defaultStyle.textTable}>
                  <Text style={defaultStyle.txt}>Linea:</Text>
                </View>

              </View>



            </View>
          </ScrollView>
        </RBSheet>

      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Contentcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'flex-start',
    paddingHorizontal: 13,
    marginTop: 10,
  },

  paymentText: {
    fontWeight: "bold",
    marginLeft: 5
  },
});


const defaultStyle = StyleSheet.create({
  select: {
    backgroundColor: '#fff',
    height: 45,
    // width:"100%",
    marginHorizontal: 10,
    marginBottom: 2,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4
  },
  containerStyle: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  InputText1Style: {
    backgroundColor: '#fff',
    // paddingBottom:20,
    // shadowColor: '#000',
    // shadowOpacity: 0.4,
    // elevation: 2,
    // position: 'relative',
    height: 50,
    // width:"100%",
    marginHorizontal: 10,
    marginBottom: 15,
    // marginLeft:5
  },

  InputText1Style2: {
    backgroundColor: '#fff',
    // paddingBottom:20,
    // shadowColor: '#000',
    // shadowOpacity: 0.4,
    // elevation: 2,
    // position: 'relative',
    height: 40,
    // width:"100%",
    marginHorizontal: 10,
    marginBottom: 15,
    // marginLeft:5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },

  btn: {
    backgroundColor: 'rgb(103 ,103 ,103)',
    borderRadius: 5,
    width: '95%',
    // width:375,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2
  },
  buttonactive: {
    backgroundColor: 'red',
    // width:375,
    borderRadius: 5,
    width: '95%',
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

  },
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

export default Reportes;
