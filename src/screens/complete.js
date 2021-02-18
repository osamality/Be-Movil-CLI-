import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import bigLogo from "../assets/Images/bigLogo.png"
import CheckCircleOutline from "../assets/Images/CheckCircleOutline.png"

const Complete = ({ activeProvider, navigation }) => {

    useEffect(() => {

    }, []);

    return (
        <View style={styles.Contentcontainer}>
            <Image style={styles.bigLogo} source={bigLogo} />
            <Image style={styles.CheckCircleOutline} source={CheckCircleOutline} />
            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500' }}>
                Procesando tu Orden</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    Contentcontainer: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center', width: '100%',height: '100%', backgroundColor: 'white'
    },
    bigLogo: {
        height: 64,
        width: 255,
    },
    CheckCircleOutline: {
        height: 80,
        width: 80,
        marginVertical: 30
    },
    paymentText: {
        fontWeight: "bold",
        marginLeft: 5
    },

});



const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: betCompanies.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(Complete);


