import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../layout/headerHome';

const MealDetailesScreen = props =>  {
  return (
    <View style={styles.container}>

      <Text>Coodiar que info mostrar aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailesScreen;
