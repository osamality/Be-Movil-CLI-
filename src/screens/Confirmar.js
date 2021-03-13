import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Image
} from 'react-native';
import { Container, Content, } from 'native-base';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import ProductType from '../components/UI/certificados/provider'
import beImg from '../assets/Images/be.png'
import beactiveImg from '../assets/Images/bactive2.png'
import beTransparent from '../assets/Images/beTransparent.png'
import { isEmpty } from 'lodash'


const Confirmar = ({ navigation }) => {
    const [selected1, setSelected1] = useState();
    const [selected2, setSelected2] = useState();
    const [selected3, setSelected3] = useState();
    const dispatch = useDispatch();

    //   useEffect(() => {

    //     return  ()=> {
    //        dispatch(certificadosActions.clearCash())
    //       }
    //   }, []);

    const activeImage = () => {

        return <Image source={beactiveImg} />

    }



    return (


        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <Container >

                <Content style={{ flex: 1 }}>

                    <View style={styles.Contentcontainer}>

                        <View style={styles.paymentContent}>
                            {activeImage()}
                            <Text style={{ ...styles.paymentText, marginRight: 4, fontWeight: 'bold' }}>
                                Total a Pagar:
                            </Text>

                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
                        </View>
                        <Text style={{ ...styles.paymentText, marginLeft: 20, alignSelf: 'flex-start', fontSize: 30, marginVertical: 10 }}>
                            $ 2.000 COP
                        </Text>

                        <View style={styles.paymentContent}>
                            {activeImage()}
                            <Text style={{ ...styles.paymentText, marginRight: 4, }}>
                                Disponible:
                            </Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '90%', marginBottom: 15, marginTop: 10 }}>
                        </View>

                        <TouchableOpacity style={selected1 ? styles.barActive : styles.bar} onPress={() => {
                            setSelected1(true)
                            setSelected2(false)
                            setSelected3(false)
                        }}>
                            <Image style={selected1 ? styles.imgActive : styles.img} source={beTransparent} />
                            <Text style={selected1 ? styles.txt1Active : styles.txt1}>Recargas</Text>
                            <Text style={selected1 ? styles.txt2Active : styles.txt2}>  300.900.900 COP</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={selected2 ? styles.barActive : styles.bar} onPress={() => {
                            setSelected1(false)
                            setSelected2(true)
                            setSelected3(false)
                        }}>
                            <Image style={selected2 ? styles.imgActive : styles.img} source={beTransparent} />
                            <Text style={selected2 ? styles.txt1Active : styles.txt1}>Recargas</Text>
                            <Text style={selected2 ? styles.txt2Active : styles.txt2}>  300.900.900 COP</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={selected3 ? styles.barActive : styles.bar} onPress={() => {
                            setSelected1(false)
                            setSelected2(false)
                            setSelected3(true)
                        }}>
                            <Image style={selected3 ? styles.imgActive : styles.img} source={beTransparent} />
                            <Text style={selected3 ? styles.txt1Active : styles.txt1}>Recargas</Text>
                            <Text style={selected3 ? styles.txt2Active : styles.txt2}>  300.900.900 COP</Text>
                        </TouchableOpacity>

                    </View>
                </Content>
            </Container>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
    },

    img: {
        marginLeft: 10,

    },
    imgActive: {
        marginLeft: 10,
        tintColor: 'white',
    },
    txt1: { fontWeight: '500', marginLeft: 25 },
    txt2: { fontWeight: '600', fontSize: 25 },
    txt1Active: { fontWeight: '500', marginLeft: 25, color: 'white' },
    txt2Active: { fontWeight: '600', fontSize: 25, color: 'white' },
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
    bar: {
        height: 65,
        width: '90%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    barActive: {
        height: 65,
        width: '90%',
        backgroundColor: 'rgb(5,193,121)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 5,
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
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

});


export default Confirmar;


