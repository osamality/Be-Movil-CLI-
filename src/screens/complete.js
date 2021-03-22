import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    ScrollView,

    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import Close from "../assets/Images/Close.png"
import CheckCircle from "../assets/Images/CheckCircle.png"
import Print from "../assets/Images/Print.png"
import iosSend from "../assets/Images/iosSend.png"
import fileDownload from "../assets/Images/fileDownload.png"
import LinearGradient from 'react-native-linear-gradient';

import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import { connect } from 'react-redux';
import bigLogo from "../assets/Images/bigLogo.png"
import CheckCircleOutline from "../assets/Images/CheckCircleOutline.png"
import { packgesData } from './transactions/pachageData';
const width = Dimensions.get('window').width;

const Complete = ({ activeProvider, navigation }) => {
    const [toggleModel, setToggleModel] = useState(true);

    useEffect(() => {

    }, []);

    return (
        <>
            <View style={styles.Contentcontainer}>
                <Image style={styles.bigLogo} source={bigLogo} />
                <Image style={styles.CheckCircleOutline} source={CheckCircleOutline} />
                <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500' }}>
                    Procesando tu Orden</Text>
            </View>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={'100%'} height={'100%'} visible={toggleModel} modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                    modalTitle={
                        <View style={styles.titleModal2}>
                            <Text style={styles.Modaltitle}>
                                Comprobante de Pago
                                </Text>
                            <TouchableOpacity style={styles.closeBtn} onPress={() => {
                                setToggleModel(false)
                            }}>
                                <Image style={{ marginLeft: 85 }} source={Close} />
                            </TouchableOpacity>
                        </View>
                    }>
                    <ModalContent >
                        <ScrollView style={{ width: width }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Image style={styles.bigLogo} source={bigLogo} />

                                <View style={styles.greenback}>
                                    <Image style={styles.CheckCircle} source={CheckCircle} />

                                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', marginVertical: 12, fontWeight: '600' }}>
                                        Transacción Éxitosa
                                        </Text>
                                </View>
                                <View style={styles.blueback}>
                                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', marginVertical: 10, fontWeight: '400' }}>
                                        Tittle of the Product
                                        </Text>
                                </View>

                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        ID PDV :
                                            </Text>
                                    <Text style={styles.innerText}>
                                        159364
                                            </Text>
                                </View>
                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        Fecha :
                                        </Text>
                                    <Text style={styles.innerText}>
                                        2021 / 01 / 01
                                        </Text>
                                </View>
                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        Hora :
                                            </Text>
                                    <Text style={styles.innerText}>
                                        18 : 58 : 12
                                            </Text>
                                </View>
                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        TRX :
                                            </Text>
                                    <Text style={styles.innerText}>
                                        79897202008071858120
                                            </Text>
                                </View>
                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        Producto:
                                            </Text>
                                    <Text style={styles.innerText}>
                                        Recarga Claro
                                            </Text>
                                </View>
                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        Línea :
                                        </Text>
                                    <Text style={styles.innerText}>
                                        300 555 98 96
                                        </Text>
                                </View>
                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        Valor :
                                        </Text>
                                    <Text style={styles.innerText}>
                                        $ 5.000 COP
                                        </Text>
                                </View>
                                <View style={styles.innerView}>
                                    <Text style={styles.innerText}>
                                        Estado :
                                        </Text>
                                    <Text style={styles.innerText}>
                                        Exitosa
                                        </Text>
                                </View>
                            </View>
                            <Text style={{ ...styles.btmText1, fontSize: 16, color: 'rgb(235,6,42)' }}>
                                Transacción realizada a través de plataforma SIRSE
                                </Text>
                            <Text style={{ ...styles.btmText, fontSize: 14 }}>
                                El pago de convenios es efectuado por Banco de Bogotá y puede tener un tiempo para ser aplicado de 48 Horas
                                </Text>

                            <LinearGradient colors={['rgb(57,72,93)', 'rgb(35,45,60)']} style={styles.productContent} >

                                <TouchableOpacity style={styles.btmContent} >
                                    <Image source={Print} style={styles.iconBtm} />
                                    <Text style={styles.TextIcon}> Imprimir </Text>
                                </TouchableOpacity >

                                <TouchableOpacity style={styles.btmContent} >
                                    <Image source={iosSend} style={styles.iconBtm} />
                                    <Text style={styles.TextIcon}> Enviar </Text>
                                </TouchableOpacity >

                                <TouchableOpacity style={styles.btmContent} >
                                    <Image source={fileDownload} style={styles.iconBtm} />
                                    <Text style={styles.TextIcon}> Guardar </Text>
                                </TouchableOpacity >
                            </LinearGradient>

                        </ScrollView>
                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({

    Contentcontainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 1,
        elevation: 8,
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 0,
        margin: 13,
    },
    ItemContent: {
        // width:50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    Text: {
        textAlign: 'center',
        width: 100,
        fontSize: 11,
        marginTop: 7,
        flex: 1,
        flexWrap: 'nowrap',
        color: 'black',
        lineHeight: 17
    },
    headerStyle: {
        // width: '180%',
        backgroundColor: 'rgb(57,72,93)',
        flexDirection: 'row',
        paddingHorizontal: '10%',
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
    listText: {
        fontWeight: '300',
        fontSize: 14,
        marginHorizontal: 10,
        borderBottomWidth: 1, borderBottomColor: 'rgb(216,216,216)',
        paddingBottom: '1%',
    },
    listHeaderStyle: {
        flexDirection: 'row',
        paddingHorizontal: '2%',
        paddingVertical: '2%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgb(216,216,216)'
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
        height: 16,
        width: 16,
        marginRight: '1%'
    },
    greenText: {
        color: 'rgb(5,193,121)'
    },
    titleModal2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(225,6,52)',
        height: 90,
        paddingTop: '6%'
    },
    closeBtn: {
        color: '#ffff',
        textAlign: 'left',
        width: '8%',
        marginTop: 6
    },
    Modaltitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    },
    bigLogo: {
        marginVertical: 15,
        height: 55,
        width: 220,
    },
    greenback: {
        backgroundColor: 'rgb(5,193,121)',
        width: width,
        flexDirection: 'row',
    },
    blueback: {
        backgroundColor: 'rgb(57,72,93)',
        width: width,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    CheckCircle: {
        height: 30,
        width: 30,
        tintColor: 'white',
        marginVertical: 12,
        marginRight: '10%',
        marginLeft: 30
    },
    innerView: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgb(195,195,195)',
        borderBottomWidth: 0.5,
    },
    innerText: {
        marginVertical: 17,
        marginHorizontal: '5%'
    },
    btmText1: {
        marginTop: 15,
        marginHorizontal: '5%'
    },
    btmText: {
        marginTop: 6,
        marginHorizontal: '5%'
    },
    TextIcon: {
        textAlign: 'center',
        width: 50,
        fontSize: 13,
        marginTop: 8,
        flex: 1,
        flexWrap: 'nowrap',
        color: '#ffff',
    },
    iconBtm: {
        marginTop: 5,
        height: 18,
        width: 20
    },
    productContent: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    btmContent: {
        flexDirection: 'column',
        height: 65,
        marginHorizontal: 16,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 25,
        elevation: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 10
    },

    Contentcontainer: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'white'
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


