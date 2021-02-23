import React, { } from 'react';
import { StyleSheet, Button,Text, View, Image, } from 'react-native';
import { connect } from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'

import notactiveImage from '../../assets/Images/notactive.png';
import { isEmpty } from 'lodash';
import RuntInputs from './runtInputs'
import SnrInputs from './SnrInputs'
const activeImageInputs = (initialValues, activeProvider, activeType) => {

  if (isEmpty(activeProvider)) {
    return <Image source={notactiveImage} />

  }
  else {

    if (initialValues.Ciudad == '' || initialValues.Matricula == '') {
      return <Image source={beImg} />
    }
    else {
      return <Image source={beactiveImg} />

    }
  }

}


const RecargasChange = ({ activeProvider, initialValues, activeType, allBalance, navigation }) => {

  if (activeProvider.name == "SNR") {
    return (
      <>
        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, activeType)}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Información del Vehículo :
                  </Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
        </View>
        <RuntInputs navigation={navigation}/>


      </>
    )
  }

  else {

    return (
      <>
        <View style={styles.paymentContent}>
          {activeImageInputs(initialValues, activeProvider, activeType)}
          <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
            Información del Vehículo :
                  </Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
        </View>
        <RuntInputs navigation={navigation}/>
       
      </>
    );
  }
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

const mapStateToProps = ({ balance, certificados, recargas }) => ({
  activeBalance: balance.activeBalance,
  allBalance: balance.balance,
  activeProvider: certificados.activeProvider,
  initialValues: certificados.initialValues,
  activeType: certificados.activeType


})


export default connect(mapStateToProps, null)(RecargasChange);







