import React, { useState, useEffect } from 'react'
import {
    View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Image,
    Keyboard, Platform
} from 'react-native';
// import {data} from './TestData'
import * as balanceActions from '../../../store/actions/balance';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { map } from 'lodash'
import { isEmpty } from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import { TextInput } from 'react-native-paper'
import { Button } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import arr from "../../../assets/Images/arr.png"
import LogoBarCode from "../../../assets/Images/LogoBarCode.png"
import upload from "../../../assets/Images/upload.png"
import details from "../../../assets/Images/details.png"
import share from "../../../assets/Images/share.png"



const ProfileBarCode = ({ activeBalance, balance }) => {
    const [Cod, setCod] = useState('196196');
    const [barCode, setBarCode] = useState('(415)7709998371804(8020)0019619')
    const [activeOption, setActiveOption] = useState("Mi Caja")
    const [activeOptionBalance, setActiveOptionBalance] = useState()
    const [second, setSecond] = useState(0)

    useEffect(() => {

    }, [second, activeBalance]);


    return (

        <>

            <View style={styles.TextContent}>
                <View style={styles.topView}>
                    <Image style={{ height: 80, width: 80, marginTop: '2%' }} source={LogoBarCode} />
                    <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 7, fontSize: 25 }}>
                            Tarjeta Recargable
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontWeight: '500', textAlign: 'center', marginTop: 7, fontSize: 13 }}>
                                Javier Mora
                            </Text>
                            <Text style={{ textAlign: 'center', marginTop: 7, ...styles.Text }}>
                                Cod. TR: {Cod}
                            </Text>
                        </View>
                        <Text style={{ fontWeight: '400', textAlign: 'center', marginTop: 7, fontSize: 12 }}>
                            No Válido como documento de
                        </Text>
                    </View>
                </View>

                <View style={styles.centerView}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 7, fontSize: 25 }}>
                       ||||||||||||||||||||||||||||||||||||||||||||||||||
                    </Text>
                    <Text style={{ fontWeight: '300', textAlign: 'center', marginTop: 7, fontSize: 19 }}>
                        {barCode}
                    </Text>
                </View>
                <Text style={{ fontWeight: '300', textAlign: 'center', marginTop: 7, fontSize: 12, color: 'red' }}>
                    Tarjeta personal e intransferible, no representa medio de pago.
                </Text>


                <View style={styles.bottomView}>
                    <TouchableOpacity style={styles.bottomIcons} onPress={() => {}}>
                        <Image source={upload} />
                        <Text style={{ textAlign: 'center', marginTop: 7, ...styles.Text }}>
                            Balance
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.line} />

                    <TouchableOpacity style={styles.bottomIcons} onPress={() => {}}>
                        <Image source={details} />
                        <Text style={{ textAlign: 'center', marginTop: 7, ...styles.Text }}>
                            Balance
                    </Text>
                    </TouchableOpacity>

                    <View style={styles.line} />

                    <TouchableOpacity style={styles.bottomIcons} onPress={() => {}}>
                        <Image source={share} />
                        <Text style={{ textAlign: 'center', marginTop: 7, ...styles.Text }}>
                            Balance
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>

    )
}


const styles = StyleSheet.create({


    Text: {
        fontSize: 13,
        textAlign: 'center',
        color: 'rgb(145,145,145)'
    },


    TextContent: {
        padding: 20,
        elevation: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4,
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
        width: '90%',
        borderRadius: 10,
        // borderRadius: 1,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        textAlign: 'center',
        marginTop: 10
    },
    topView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '1%',
        paddingBottom: '5%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    centerView: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '1%',
        paddingVertical: '2%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    bottomView: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    line: {
        height: '100%',
        width: 1,
        backgroundColor: 'rgb(180,180,180)'
    },
    bottomIcons: {
        alignItems: 'center',
        // padding: 70 / 2
    }

});

const mapStateToProps = ({ balance }) => ({
    activeBalance: balance.activeBalance,
    balance: balance.balance


})

export default ProfileBarCode;
