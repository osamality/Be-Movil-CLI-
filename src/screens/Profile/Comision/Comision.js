import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import mainLogo from '../../../assets/Images/mainLogo.png';
import bemovil from '../../../assets/Images/bemovil.png';



const Comision = ({ activeProvider, navigation }) => {

    useEffect(() => {

    }, []);

    return (
        <>
            <View style={styles.container}>
                <Image source={mainLogo} style={styles.icon1} />
                <Image source={bemovil} style={styles.icon} />
            </View>
            <Text style={styles.text}>
                Nos encontramos trabajando para brindarte
                La mejor experiencia de asignación de comisiones para tus clientes
                </Text>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        alignItems: 'center',
        marginTop: '15%',
        marginBottom: '7%',

    },
    icon1: {
        height: 90,
        width: 80,
        marginBottom: '7%'
    },
    icon: {
        marginBottom: '5%'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: '5%'
    }

});



const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: betCompanies.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(Comision);


