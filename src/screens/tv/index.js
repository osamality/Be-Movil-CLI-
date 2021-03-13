import React, { useEffect, } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native';
import { Container, Content, } from 'native-base';
import { useDispatch } from 'react-redux';
import * as certificadosActions from '../../store/actions/certificados';
import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import { connect } from 'react-redux';
import ProductType from '../../components/UI/tv/provider'
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import { isEmpty } from 'lodash'
import Inputs from './inputs'


const TvScreen = ({ activeProvider, navigation, }) => {

  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      dispatch(certificadosActions.clearCash())
    }
  }, []);

  const activeImage = () => {
    if (!isEmpty(activeProvider)) {
      return <Image source={beactiveImg} />
    }
    else {
      return <Image source={beImg} />
    }
  }



  return (


    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Container >

        <Content style={{ flex: 1 }}>

          <View style={styles.Contentcontainer}>
            {/* <CustomTapsBalance/> */}

            <View style={styles.paymentContent}>
              {activeImage()}
              <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
                Seleccionar TV :
            </Text>
              {
                activeProvider?.name && <Text style={{ color: 'rgb(44,209,158)', fontWeight: 'bold' }}>
                  {activeProvider.name}
                </Text>
              }


            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
            </View>
            <ProductType />
            <Inputs navigation={navigation} />




          </View>
        </Content>
      </Container>
    </TouchableWithoutFeedback>

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

});



const mapStateToProps = ({ balance, TvReducer }) => ({
  activeBalance: balance.activeBalance,
  activeProvider: TvReducer.activeProvider,

})


export default connect(mapStateToProps, null)(TvScreen);


