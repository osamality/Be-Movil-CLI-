import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    Button
} from 'react-native';
import { profileData } from '../pachageData';
import { TextInput, Checkbox } from 'react-native-paper';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import { get, filter, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import drop from '../../../assets/Images/Dropdown.png'

import arrowBack from "../../../assets/Images/arrowBack.png"
import bigLogo from "../../../assets/Images/bigLogo.png"
import CheckCircleOutline from "../../../assets/Images/CheckCircleOutline.png"
const Check = () => {
    return (
        <View style={styles.drop}>
            <TouchableOpacity style={styles.touchDrop} >
                <Image source={drop} />
            </TouchableOpacity>

            <Checkbox.Android
                color={'grey'}
                uncheckedColor={'grey'}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <Text style={styles.textDrop}>Administración</Text>
        </View>

    )
}

const createProfile = ({ activeProvider, navigation }) => {
    const [toggleModel, setToggleModel] = useState(false);
    const [checked, setChecked] = useState(false);
    const [showOption, setShowOptions] = useState(false);

    const [number, setNumber] = useState('')
 

    return (
        <>
            <ScrollView style={styles.container}>
                <TextInput
                    label="Nombre del Perfil"
                    value={number}
                    style={styles.textInput}
                    mode='outlined'
                    keyboardType="numeric"
                    onChangeText={text => { setNumber(text) }}
                    theme={{ colors: { primary: 'gray', underlineColor: 'transparent', background: 'white' } }}
                />

                <Text style={{ marginHorizontal: '2%', fontWeight: '600', fontSize: 20 }}>Permisos</Text>


                <View style={styles.drop}>
                    <TouchableOpacity style={styles.touchDrop} onPress={() => setShowOptions(!showOption)} >
                        <Image style={styles.dropimg} source={drop} />
                    </TouchableOpacity>

                    <Checkbox.Android
                        color={'grey'}
                        uncheckedColor={'grey'}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.textDrop}>Administración</Text>
                </View>
                {showOption ?
                    <>
                        <View style={styles.drop}>
                            <View style={styles.space} />

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Cliente</Text>
                        </View>
                        <View style={styles.drop}>
                            <View style={styles.space} />

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Inventario</Text>
                        </View>
                        <View style={styles.drop}>
                            <View style={styles.space} />

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Registor USSD</Text>
                        </View>
                        <View style={styles.drop}>
                            <View style={styles.space} />

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Usuarios Propios</Text>
                        </View>
                    </>
                    :
                    null
                }
                <View style={styles.drop}>
                    <TouchableOpacity style={styles.touchDrop} >
                        <Image style={styles.dropimg} source={drop} />
                    </TouchableOpacity>

                    <Checkbox.Android
                        color={'grey'}
                        uncheckedColor={'grey'}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.textDrop}>Reportes</Text>
                </View>
                {showOption ?
                    <>
                        <View style={styles.drop}>
                            <View style={styles.space} />

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Distribución y Compras</Text>
                        </View>
                        <View style={styles.drop}>
                            <View style={styles.space} />

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Informes de Gestión</Text>
                        </View>
                        <View style={styles.drop}>
                            <View style={styles.space} />

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Ventas</Text>
                        </View>
                    </>
                    :
                    null
                }
                <View style={styles.drop}>
                    <TouchableOpacity style={styles.touchDrop} >
                        <Image style={styles.dropimg} source={drop} />
                    </TouchableOpacity>

                    <Checkbox.Android
                        color={'grey'}
                        uncheckedColor={'grey'}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.textDrop}>Solicitudes</Text>
                </View>
                {showOption ?
                    <>
                        <View style={styles.drop}>
                            <View style={styles.space} />
                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Aprobación Avances</Text>
                        </View>
                        <View style={styles.drop}>
                            <View style={styles.spacee} />

                            <TouchableOpacity style={styles.touchDrop} >
                                <Image style={styles.dropimg} source={drop} />
                            </TouchableOpacity>

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Solicitudes</Text>
                        </View>
                        {showOption ?
                            <>
                                <View style={styles.drop}>
                                    <View style={styles.space} />
                                    <View style={styles.spacee} />


                                    <Checkbox.Android
                                        color={'grey'}
                                        uncheckedColor={'grey'}
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}
                                    />
                                    <Text style={styles.textDrop}>Distribución y Compras</Text>
                                </View>
                            </>
                            :
                            null
                        }
                        <View style={styles.drop}>
                            <View style={styles.spacee} />

                            <TouchableOpacity style={styles.touchDrop} >
                                <Image style={styles.dropimg} source={drop} />
                            </TouchableOpacity>

                            <Checkbox.Android
                                color={'grey'}
                                uncheckedColor={'grey'}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.textDrop}>Solicitudes</Text>
                        </View>
                        {showOption ?
                            <>
                                <View style={styles.drop}>
                                    <View style={styles.space} />
                                    <View style={styles.spacee} />


                                    <Checkbox.Android
                                        color={'grey'}
                                        uncheckedColor={'grey'}
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}
                                    />
                                    <Text style={styles.textDrop}>Distribución y Compras</Text>
                                </View>
                            </>
                            :
                            null
                        }
                    </>
                    :
                    null
                }

                <View style={styles.drop}>

                    <View style={styles.spacee} />

                    <Checkbox.Android
                        color={'grey'}
                        uncheckedColor={'grey'}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.textDrop}>Recargas</Text>
                </View>

                <View style={styles.drop}>

                    <View style={styles.spacee} />
                    <Checkbox.Android
                        color={'grey'}
                        uncheckedColor={'grey'}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.textDrop}>Recaudas</Text>
                </View>





            </ScrollView>
            <TouchableOpacity style={styles.Button} onPress={() => {
                setToggleModel(true)
            }}>
                <Text style={styles.btnText}>Registrar Perfil</Text>
            </TouchableOpacity>



            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={380} height={380} visible={toggleModel} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
                    <ModalContent >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Image style={styles.bigLogo} source={bigLogo} />
                            <Image style={styles.CheckCircleOutline} source={CheckCircleOutline} />
                            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                            Nuevo Perfil</Text>
                            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5  }}>
                            Perfil Creado Satisfactoriamente
                            </Text>
                            <Text style={{ fontSize: 12, color: 'rgb(5,193,121)', textAlign: 'center', fontWeight: '500' }}>
                            Perfil 2021</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setToggleModel(false)
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

    container: {
        flex: 1,
        padding: '5%'
    },
    textInput: {
        marginVertical: '3%',
    },

    Contentcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    Button: {
        width: '90%',
        height: '6%',
        margin: '5%',
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        color: 'white'
    },
    checkbox: {
        marginHorizontal: 10
    },
    drop: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: '20%',
    },
    touchDrop: {
        justifyContent: 'center',
        marginRight: '5%'
    },
    textDrop: {
        marginHorizontal: 5
    },
    dropimg: {
        height: 7,
        width: 7
    },
    space: {
        width: '15%'
    },
    spacee: {
        width: '7.5%'
    },
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
        marginTop: 30
    },
    btnTransfer: {
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 5,
        // width: '80%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
});



const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: betCompanies.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(createProfile);

