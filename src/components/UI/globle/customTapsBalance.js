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
import arrowBottom from "../../../assets/Images/arrowBotton.png"


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
                <Text style={{ textAlign: 'center', marginTop: 7, ...styles.Text }}>
                    Balance
                </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 7}}>
                    {second} COP
                </Text>
                <TouchableOpacity style={{ width: 20 }} onPress={() => setToggleModel(true)}>
                    <Image source={arr} />
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
                            <Text style={styles.closeBtn} onPress={() => setToggleModel(false)}> X</Text>
                        </View>
                    }>
                    <ModalContent >

                        <View style={styles.wraper}>
                            <Text style={styles.TitleText}>
                                Enviar desde:
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', height: 60, marginVertical: 20 }}>
                            <View style={styles.select}>

                                {Platform.OS !== "ios" ?
                                    <Picker
                                        selectedValue={activeOption}
                                        mode="dropdown"
                                        style={{ height: 50, width: '100%' }}
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
                                <Text style={{ color: 'rgb(44,209,158)' }}>
                                    Balance
                        </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                                    {activeOptionBalance} COP
                        </Text>
                            </View>
                        </View>
                        <View style={{ ...styles.wraper, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.TitleText}>Depositar en:</Text>
                            <View style={{
                                width: 40, height: 40, borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1, borderColor: "black"
                            }}>
                                <Image source={arrowBottom} />
                            </View>
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
                                Enviar monto desde Recargas a Mi Caja
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
                                onPress={() => setToggleModel(false)}
                                style={styles.btn}>
                                <Text style={{ color: '#ffff' }}>Transferir</Text>
                            </Button>
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
        shadowOpacity: 0.27,
        shadowRadius: 8,

        elevation: 6,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '60%',
        height: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 6,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        textAlign: 'center',
    },
    TitleText: {
        fontSize: 15,
        color: "black",
        textAlign: 'left',
        fontWeight: 'bold'
    },
    wraper: {
        marginTop: 5,
        // margin : 10,
        width: '90%'

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
        backgroundColor: 'rgb(235,6,42)',
        height: 50
    },
    closeBtn: {
        color: '#ffff',
        textAlign: 'left',
        width: '8%',
        fontWeight: 'bold',
        fontSize: 16

    },
    title: {
        color: '#ffff',
        textAlign: 'center',
        width: '92%',
        fontSize: 18
    },

    Contentcontainer: {
        flex: 1,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.27,
        shadowRadius: 8,
        flexDirection: 'row',
        width: '90%',
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
        fontSize: 12,
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
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign: 'center',
        marginTop: 10
    },

});

const mapStateToProps = ({ balance }) => ({
    activeBalance: balance.activeBalance,
    balance: balance.balance


})

export default connect(mapStateToProps, null)(CustomTapsBalance)
