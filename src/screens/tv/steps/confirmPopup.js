import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux'
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import bigLogo from '../../../assets/Images/bigLogo.png'

import { Button } from 'native-base';
const Popup = ({ toggleModel, setToggleModal }) => {
  return (
    <Modal

      width={350}
      height={280}
      visible={toggleModel}
      modalAnimation={new SlideAnimation({
        slideFrom: 'top',
      })}>

      <ModalContent>
        <>
          <Image source={bigLogo} style={{ width: 350, justifyContent: 'center', alignContent: 'center' }} />


          <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
            <Button
              onPress={setToggleModal}
              style={styles.accecptBtn}>
              <Text style={{ color: '#ffff' }}>Continuar</Text>
            </Button>
          </View>
        </>
      </ModalContent>

    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accecptBtn: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'rgb(235,6,42)',
    borderRadius: 5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
});

const mapStateToProps = ({ balance }) => ({
  activeBalance: balance.activeBalance

})


export default connect(mapStateToProps, null)(Popup);

