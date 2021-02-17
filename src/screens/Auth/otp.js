import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import OTPInput from 'react-native-otp';

export default class App extends React.Component {

  state = {
    otp: ''
  }

  handleOTPChange = (otp) => {
    this.setState({ otp })
  }

  clearOTP = () => {
    this.setState({ otp: undefined })
  }

  autoFill = () => {
    this.setState({ otp: '221198' })
  }

  render() {
    return (
      <View style={styles.container}>

        <OTPInput
          value={this.state.otp}
          onChange={this.handleOTPChange}
          // tintColor="#FB6C6A"
          // offTintColor="#BBBCBE"
          otpLength={6}
          cellStyle={styles.cell}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%"
  },
  text: {
    marginBottom: 15
  },
  cell: {
    width: 43,
      height:53,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    elevation: 1,
    backgroundColor: "white",
    textAlign: 'center'
  },

});