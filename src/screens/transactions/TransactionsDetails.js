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

            <View style={styles.titleModal2}>
                <Text style={styles.closeBtn} onPress={() => {
                    setToggleModel(false)
                }}>
                    {/* <Image source={Close} /> */}
                    </Text>
                {/* <Image style={styles.bigLogo} source={bigLogo} /> */}
            </View>
            {/* <ModalContent > */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Text style={styles.TitleText2}>
                        Confirmar Transferencia
                            </Text>
                    <Text style={{ fontSize: 17, color: 'black', textAlign: 'center', marginTop: 10, fontWeight: '300' }}>
                        Se esta realizando un moviento entre cajas
                                Desde <Text style={styles.greenText}>Mi Caja</Text> con destino <Text style={styles.greenText}>Recargas</Text>
                    </Text>
                    <Text style={{ fontSize: 30, color: 'black', textAlign: 'center', marginVertical: 20 }}>
                        100.000 COP
                            </Text>
                    {/* <Button
                                onPress={() => {
                                    setToggleModel(false)
                                }}
                                style={styles.btnTransfer}>
                                <Text style={{ color: '#ffff' }}>Transferir Balance</Text>
                            </Button> */}
                </View>


            {/* </ModalContent> */}

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


