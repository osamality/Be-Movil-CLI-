import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { profileData } from '../pachageData';
import { TextInput, Checkbox } from 'react-native-paper';
import { get, filter, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import drop from '../../../assets/Images/Dropdown.png'

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
    const [checked, setChecked] = useState(false);
    const [showOption, setShowOptions] = useState(false);

    const [number, setNumber] = useState('')
    useEffect(() => {

    }, []);

    return (
        <>
            <View style={styles.container}>
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
                <Text> asd</Text>


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
                    <View style={styles.drop}>
                        <View style={styles.space}/>

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
                    <View style={styles.drop}>
                        <View style={styles.space}/>
                       
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
                    <View style={styles.drop}>
                        <View style={styles.space}/>
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
                    :
                    null
                }


            </View>


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
    checkbox: {
        marginHorizontal: 102
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
        width: '12%'
    }

});



const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: betCompanies.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(createProfile);

