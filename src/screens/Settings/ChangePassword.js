import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { TextInput } from 'react-native-paper';
import ChangePassword from '../../assets/Images/changePassword.png'
import CheckCircleOutline from '../../assets/Images/CheckCircleOutline.png'
import bigLogo from '../../assets/Images/bigLogo.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authActions from '../../store/actions/auth';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

const Account = props => {
    const [number, setNumber] = useState('')
    const [toggleModel, setToggleModel] = useState(false);
    const [toggleModel2, setToggleModel2] = useState(false);

    const navigation = useNavigation()

    return (
        <>
            <View style={styles.body}>
                <Image source={ChangePassword} style={styles.image} />
            </View>
            <View style={{ marginHorizontal: '5%' }}>
                <TextInput
                    label="Contraseña Actual"
                    value={number}
                    style={styles.textInput}
                    mode='outlined'
                    keyboardType="numeric"
                    onChangeText={text => { setNumber(text) }}
                    theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                />
                <TextInput
                    label="Nombre del Perfil"
                    value={number}
                    style={styles.textInput}
                    mode='outlined'
                    keyboardType="numeric"
                    onChangeText={text => { setNumber(text) }}
                    theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                />
                <TextInput
                    label="Nombre del Perfil"
                    value={number}
                    style={styles.textInput}
                    mode='outlined'
                    keyboardType="numeric"
                    onChangeText={text => { setNumber(text) }}
                    theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                />
                <TouchableOpacity
                    onPress={() => {
                        setToggleModel(true)
                    }}
                    style={styles.btnTransfer}>
                    <Text style={{ color: '#ffff', fontSize: 18 }}>Transferir Balance</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image source={bigLogo} style={styles.imagelog} />
                <Text style={styles.version}>
                    Cambiar Contraseña
                </Text>
            </View>




            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={380} height={460} visible={toggleModel} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
                    <ModalContent >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Image style={styles.bigLogo} source={bigLogo} />
                            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                                Verificación Número Celular</Text>
                            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5 }}>
                                Para proteger su cuenta, Verifique su linea
                                de contacto con Be Movil
                            </Text>
                            <TextInput
                                label="Numero Ceular"
                                value={number}
                                style={styles.textInput2}
                                mode='outlined'
                                keyboardType="numeric"
                                onChangeText={text => { setNumber(text) }}
                                theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                            />
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', }}>
                                <TextInput
                                    label="Código Seguridad"
                                    value={number}
                                    style={styles.textInput3}
                                    mode='outlined'
                                    keyboardType="numeric"
                                    onChangeText={text => { setNumber(text) }}
                                    theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                                />
                                <TouchableOpacity
                                    style={styles.btnTransfer2}>
                                    <Text style={{ color: 'rgb(5,193,121)' }}>Enviar Código</Text>
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    setToggleModel(false)
                                    setToggleModel2(true)
                                }}
                                style={styles.btnTransfer}>
                                <Text style={{ color: '#ffff' }}>Transferir Balance</Text>
                            </TouchableOpacity>
                        </View>


                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={380} height={400} visible={toggleModel2} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
                    <ModalContent >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Image style={styles.bigLogo} source={bigLogo} />
                            <Image style={styles.CheckCircleOutline} source={CheckCircleOutline} />
                            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                                Nuevo Perfil</Text>
                            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5 }}>
                                Perfil Creado Satisfactoriamente
                            </Text>
                            <Text style={{ fontSize: 12, color: 'rgb(5,193,121)', textAlign: 'center', fontWeight: '500' }}>
                                Perfil 2021</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setToggleModel2(false)
                                }}
                                style={styles.btnTransfer}>
                                <Text style={{ color: '#ffff' }}>Transferir Balance</Text>
                            </TouchableOpacity>
                        </View>


                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-around',
        alignContent: 'center',
        flexDirection: 'row',
        width: '90%',
        margin: 20
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderWidth: 1,
        borderColor: 'rgb(112,112,112)',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    subTitle: {
        fontSize: 15
    },
    TextId: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        marginVertical: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        borderBottomColor: 'rgb(216,216,216)',
        borderBottomWidth: 1.5,
        padding: 15
    },
    logout: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        borderBottomColor: 'rgb(216,216,216)',
        borderBottomWidth: 1.5,
        padding: 15,
        borderTopColor: 'rgb(216,216,216)',
        borderTopWidth: 1.5,
    },
    image: {
        marginRight: 20
    },
    imagelog: {
        height: 50,
        width: 200,
        marginRight: 20,
        marginLeft: 28
    },
    footer: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    version: {
        textAlign: 'center',
        marginVertical: 20,
        color: 'rgb(159,159,159)'
    },
    textInput: {
        marginVertical: '3%',
    },
    textInput2: {
        marginVertical: '3%',
        width: '100%'
    },
    textInput3: {
        // marginVertical: 15,
        width: '58%',
        marginRight: '2%'
    },
    btnTransfer2: {
        marginTop: 5,
        height: 59,
        marginLeft: '2%',
        backgroundColor: 'white',
        width: '38%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(5,193,121)',
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 15
    },
    btnTransfer: {
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 5,
        // width: '80%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    },
    bigLogo: {
        height: 64,
        width: 255,
    },
    CheckCircleOutline: {
        height: 80,
        width: 80,
        marginTop: 30
    },
});

export default Account;
