import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { packgesData } from './pachageData';
import { connect } from 'react-redux';

const Products = ({ activeProvider, navigation }) => {

    useEffect(() => {

    }, []);

    return (
        <View>
           
        </View>
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
        backgroundColor: 'rgb(57,72,93)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '8%',
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
    listHeaderStyle: {
        // backgroundColor: 'rgb(57,72,93)',

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '6%',
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
        height: 30,
        width: 30,
        marginRight: '8%'
    }
});



const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: betCompanies.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(Products);


