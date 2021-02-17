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
import arr from "../../../assets/Images/arrowBalance.png"
import iconIonicIosClose from "../../../assets/Images/Close.png"
import arrowBack from "../../../assets/Images/arrowBack.png"
import bigLogo from "../../../assets/Images/bigLogo.png"
import arrowF from "../../../assets/Images/arrowF.png"
import arrowB from "../../../assets/Images/arrowB.png"

import DropDownPicker from 'react-native-dropdown-picker';

const RenderText = ({ data, resetCount }) => {
    const [index, setIndex] = useState("SS");
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(balanceActions.saveActiveBalance(data.SS))


    }, []);

    const setStatus = async (index, balance) => {
        resetCount();
        const action = balanceActions.saveActiveBalance(balance)
        setIndex(index);
        try {
            await dispatch(action)
        }
        catch {
            console.log("Falied Balnace")
        }
    }

    return map(data, (d, v) => {
        return (
            <TouchableOpacity key={v}
                style={index == v ? styles.contentActive : styles.content}
                onPress={() => setStatus(v, d)}

            >
                <Text style={v == index ? styles.Textbold : styles.Text}> {v == "SS" ? "Recargas " : v == "ST" ? "Mi Caja" : "Mi Ahorro"} </Text>
                <Text style={v == index ? styles.activeText : styles.normalText}> {v == index ? 'Active' : d} </Text>
            </TouchableOpacity >

        )
    })

}
const CustomTapsBalance = ({ activeBalance, balance }) => {
    const [toggleModel, setToggleModel] = useState(false);
    const [toggleModel2, setToggleModel2] = useState(false);
    const [toggleModel3, setToggleModel3] = useState(false);

    const [Valor, setValor] = useState('')
    const [activeOption, setActiveOption] = useState("Mi Caja")
    const [activeOptionBalance, setActiveOptionBalance] = useState()
    const [second, setSecond] = useState(0)

    useEffect(() => {
        console.log(activeBalance)
        if (activeBalance) {

            if (second !== activeBalance || second == 0) {
                const interval = setInterval(() => {
                    setSecond(second => second + 1000);
                }, 1);
                return () => {
                    clearInterval(interval);
                }

            }
        }
    }, [second, activeBalance]);

    const setSelect = (value) => {
        if (value == "Mi Caja") {
            setActiveOption(value);
            setActiveOptionBalance(balance.ST)
        }
        else {
            setActiveOption(value);
            setActiveOptionBalance(balance.SP)
        }
    }
    const resetCount = () => {
        setSecond(0)
    }
    return (

        <>

            <View style={styles.TextContent}>
                <Text style={{ ...styles.Text }}>
                    Balance
                </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                    {second} <Text style={{ fontSize: 14, fontWeight: '500' }}>COP</Text>
                </Text>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setToggleModel(true)}>
                    <Image style={{ height: 20, width: 20 }} source={arr} />
                </TouchableOpacity>
            </View>

            <View style={styles.Contentcontainer}>
                {<RenderText data={balance} resetCount={resetCount} />}
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={380} height={500} visible={toggleModel} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}
                    modalTitle={
                        <View style={styles.titleModal}>
                            <Text style={styles.title}>Movimientos entre Bolsas</Text>
                            <Text style={styles.closeBtn} onPress={() => setToggleModel(false)}><Image source={iconIonicIosClose} /></Text>
                        </View>
                    }>
                    <ModalContent >

                        <View style={styles.wraper}>
                            <Text style={styles.TitleText}>
                                Enviar desde:
                            </Text>
                            <Image style={{ height: 22, width: 22 }} source={arrowF} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', height: 60, marginVertical: 20 }}>
                            <View style={styles.select}>

                                {Platform.OS !== "ios" ?
                                    <Picker
                                        selectedValue={activeOption}
                                        mode="dropdown"
                                        style={{ height: 50, width: '100%', }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelect(itemValue)
                                        }>
                                        <Picker.Item label="Mi Caja" value="Mi Caja" />
                                        <Picker.Item label="Mi Ahorro" value="Mi Ahorro" />
                                    </Picker>
                                    :
                                    <RNPickerSelect
                                        placeholder={{}}

                                        style={{ height: 50, width: '100%' }}
                                        //    Icon={() => {
                                        //     return <Icon name="chevron-down" size={15} color="#ffff" />;
                                        //   }}
                                        onValueChange={(value) => setSelect(value)}
                                        items={[
                                            { label: 'Mi Caja', value: 'Mi Caja' },
                                            { label: 'Mi Ahorro', value: 'Mi Ahorro' },
                                        ]}
                                    />

                                }

                            </View>

                            <View style={styles.balanceWrapper}>
                                <Text style={{ color: 'red', }}>
                                    Balance
                        </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                                    {activeOptionBalance} COP
                        </Text>
                            </View>
                        </View>
                        <View style={{ ...styles.wraper }}>
                            <Text style={styles.TitleText}>Depositar en:</Text>
                            <Image style={{ height: 22, width: 22 }} source={arrowB} />
                            {/* <View style={{
                                width: 40, height: 40, borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1, borderColor: "black"
                            }}>
                                <Image source={arrowBottom} />
                            </View> */}
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', height: 60, marginVertical: 20 }}>
                            <View style={styles.selectGreen}>
                                <Text style={{ color: '#ffff', textAlign: 'center' }}>
                                    Recargas
                        </Text>
                            </View>
                            <View style={{ ...styles.balanceWrapper, backgroundColor: 'rgb(44,209,158)' }}>
                                <Text style={{ color: '#ffff', textAlign: 'right' }}>
                                    Balance
                        </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#ffff', textAlign: 'right' }}>
                                    {balance?.SS} COP
                        </Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                                Enviar monto desde <Text style={styles.greenText}>Mi Caja</Text> a <Text style={styles.greenText}>Recargas</Text>
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <TextInput
                                label="Valor"
                                value={Valor}
                                style={styles.InputText1Style}
                                mode='outlined'
                                keyboardType="numeric"
                                onChangeText={text => setValor(text)}
                                underlineColor='transparent'
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                                text='white'
                                direction='rtl'
                                theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: '#003489' } }}
                                editable={true}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                            <Button
                                onPress={() => {
                                    setToggleModel(false)
                                    setToggleModel2(true)
                                }}
                                style={styles.btn}>
                                <Text style={{ color: '#ffff' }}>Transferir</Text>
                            </Button>
                        </View>


                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={380} height={380} visible={toggleModel2} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}
                    modalTitle={
                        <View style={styles.titleModal2}>

                            <Text style={styles.closeBtn} onPress={() => {
                                setToggleModel2(false)
                                setToggleModel(true)
                            }}>
                                <Image source={arrowBack} /></Text>
                            <Image style={styles.bigLogo} source={bigLogo} />
                        </View>
                    }>
                    <ModalContent >
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
                            <Button
                                onPress={() => {
                                    setToggleModel2(false)
                                    setToggleModel3(true)
                                }}
                                style={styles.btnTransfer}>
                                <Text style={{ color: '#ffff' }}>Transferir Balance</Text>
                            </Button>
                        </View>


                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={380} height={350} visible={toggleModel3} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}
                    modalTitle={
                        <View style={styles.titleModal2}>
                            <Image style={styles.bigLogo} source={bigLogo} />
                        </View>
                    }>
                    <ModalContent >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Text style={styles.TitleText2}>
                                Confirmar Transferencia
                            </Text>
                            <Text style={{ fontSize: 17, color: 'black', textAlign: 'center', marginVertical: 20, fontWeight: '300' }}>
                                ¿ Desea cancelar está transferencia ?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Button
                                    onPress={() => {
                                        setToggleModel3(false)
                                    }}
                                    style={{ ...styles.btnCancel, marginTop: 30 }}>
                                    <Text>Cancelar</Text>
                                </Button>
                                <Button
                                    onPress={() => {
                                        setToggleModel2(false)
                                        setToggleModel3(true)
                                    }}
                                    style={{ ...styles.btnAccept, marginTop: 30 }}>
                                    <Text style={{ color: '#ffff' }}>Aceptar</Text>
                                </Button>
                            </View>
                        </View>


                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>
        </>

    )
}


const styles = StyleSheet.create({
    selectGreen: {
        backgroundColor: "rgb(44,209,158)",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        textAlign: 'center',
        width: '40%', height: '100%',
        borderRightWidth: 1,
        borderRightColor: '(rgb(230,230,230)',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        elevation: 5,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    select: {
        backgroundColor: "#ffff",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        textAlign: 'center',
        width: '40%', height: '100%',
        borderRightWidth: 1,
        borderRightColor: '(rgb(230,230,230)',
        // shadowColor: 'black',
        // shadowOpacity: 5.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 8,
        // elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        elevation: 6,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    balanceWrapper: {

        // shadowColor: 'black',
        // shadowOpacity: 5.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 8,
        // elevation: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,

        elevation: 6,
        padding: 10,
        paddingHorizontal: '5%',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '60%',
        height: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 6,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
    },
    TitleText: {
        fontSize: 18,
        color: "black",
        textAlign: 'left',
        fontWeight: '500',
        marginRight: 7
    },
    TitleText2: {
        fontSize: 26,
        color: "black",
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 20
    },
    wraper: {
        flexDirection: 'row',
        marginTop: 18,
        width: '90%'
    },
    wraper2: {
        flexDirection: 'row',
        marginTop: 18,
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 5,
        // width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2
    },
    btnTransfer: {
        backgroundColor: 'rgb(5,193,121)',
        width: '100%',
        borderRadius: 5,
        // width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2
    },
    btnCancel: {
        backgroundColor: 'white',
        width: '43%',
        borderRadius: 5,
        // width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 5
    },
    btnAccept: {
        backgroundColor: 'rgb(235,6,42)',
        width: '43%',
        borderRadius: 5,
        // width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
        marginLeft: 5
    },
    InputText1Style: {
        backgroundColor: '#fff',
        // paddingBottom:20,
        // shadowColor: '#000',
        // shadowOpacity: 0.4,
        // elevation: 2,
        // position: 'relative',
        height: 45,
        width: '100%',
        marginVertical: 20
        // marginLeft:5
    },
    titleModal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(225,6,52)',
        height: 50

    },
    titleModal2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgb(225,6,52)',
        height: 100,
        marginTop: 20,
    },

    closeBtn: {
        color: '#ffff',
        textAlign: 'left',
        width: '8%',
        marginTop: 6
    },
    title: {
        color: '#ffff',
        textAlign: 'center',
        width: '92%',
        fontWeight: '600',
        fontSize: 19
    },

    Contentcontainer: {
        flex: 1,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        flexDirection: 'row',
        width: '92%',
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: 'center',
        // marginTop: 10
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 8,
    },
    contentActive: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 8,
        borderTopWidth: 2,
        borderTopColor: 'rgb(5,193,121)'
        // backgroundColor:'red',

    },
    Text: {
        fontSize: 14,
        textAlign: 'center',
        color: 'rgb(145,145,145)'
    },
    Textbold: {
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'

    },
    activeText: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgb(5,193,121)'
    },
    normalText: {
        fontSize: 12,
        textAlign: 'center',
        color: 'rgb(145,145,145)'
    },

    TextContent: {
        elevation: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        backgroundColor: 'white',
        paddingTop: '4%',
        paddingBottom: '2.5%',
        paddingHorizontal: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '92%',
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign: 'center',
        marginTop: 10
    },
    greenText: {
        color: 'rgb(5,193,121)'
    },
    bigLogo: {
        height: 64,
        width: 255,
        marginLeft: 20
    }

});

const mapStateToProps = ({ balance }) => ({
    activeBalance: balance.activeBalance,
    balance: balance.balance


})

export default connect(mapStateToProps, null)(CustomTapsBalance)
