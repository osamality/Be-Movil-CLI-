import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import person from '../../assets/Images/userIcon.png'
import PhoneIphoneIcon from '../../assets/Images/PhoneIphoneIcon.png'
import idIcon from '../../assets/Images/idIcon.png'
import attherateIcon from '../../assets/Images/attherateIcon.png'
import homeIcon from '../../assets/Images/homeIcon.png'
import caseIcon from '../../assets/Images/caseIcon.png'
import lockIcon from '../../assets/Images/lockIcon.png'
import dollarIcon from '../../assets/Images/dollarIcon.png'
import WarningIcon from '../../assets/Images/WarningIcon.png'
import logout from '../../assets/Images/bigLogo.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

const Account = props => {
    const navigation = useNavigation()


    return (
        <>
            <View style={styles.body}>
                <TouchableOpacity style={styles.row}>
                    <Image source={person} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>Nombre</Text>
                        <Text style={styles.subTitle2}>Nicole Hamilton</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Image source={PhoneIphoneIcon} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>Celular</Text>
                        <Text style={styles.subTitle2}>3201509525</Text>
                    </View>
                    <View style={styles.warning}>
                        <Image source={WarningIcon} style={styles.image} />
                        <Text>Verificar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Image source={idIcon} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>ID</Text>
                        <Text style={styles.subTitle2}>169169</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Image source={attherateIcon} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>Correo Electrónico</Text>
                        <Text style={styles.subTitle2}>hello@bemovil.net</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Image source={homeIcon} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>Dirección</Text>
                        <Text style={styles.subTitle2}>CALI - VALLE DEL CAUCA</Text>
                    </View>
                    <Text style={{color:'rgb(5,193,121)', marginLeft: '25%'}}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Image source={caseIcon} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>Tipo de Usuario</Text>
                        <Text style={styles.subTitle2}>Distribuidor</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Image source={lockIcon} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>Auto-Bloqueo</Text>
                        <Text style={styles.subTitle2}>Desactivado</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Image source={dollarIcon} style={styles.image} />
                    <View>
                        <Text style={styles.subTitle}>Balance Total</Text>
                        <Text style={styles.subTitle2}>9.000.000 COP</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.footer}>
                <Image source={logout} style={styles.imagelog} />
                <Text style={styles.version}>
                Eliminar Cuenta
                </Text>
            </View>
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
        fontSize: 13,
        color: 'rgb(235,6,42)',
    },
    subTitle2: {
        fontSize: 15
    },
    TextId: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
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
    },
    warning: {
        backgroundColor: 'rgba(235,6,42,0.11)',
        marginLeft: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    }
});

export default Account;
