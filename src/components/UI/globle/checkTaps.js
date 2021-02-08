import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native';

const ProductType = ({ check, setCheck }) => {


    return (
        <>
            <Checkbox.Android
                color={'grey'}
                uncheckedColor={'grey'}
                status={check ? 'checked' : 'unchecked'}
                onPress={() => {
                    setCheck(!checked);
                }}
            />
            <Text style={styles.textDrop}>Administración</Text>
        </>
    )

}

const styles = StyleSheet.create({



})
export default ProductType;

