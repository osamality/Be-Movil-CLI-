import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Pressable
} from 'react-native';
import { Container, Content, Form, Button, TouchableOpacity, } from 'native-base';
import { useDispatch } from 'react-redux';
import bigLogo from '../../assets/Images/bigLogo.png'
import CheckCircleOutline from '../../assets/Images/CheckCircleOutline.png';
import notactiveImage from '../../assets/Images/notactive.png';

import * as RecargasActions from '../../store/actions/recargas';
import * as ProductActions from '../../store/actions/product';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { connect } from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import { isEmpty } from 'lodash'
import RecargasChangeType from './RecargasChangeType'
import RecargasChangeType2 from './RecargasChangeType2'
import RecargasChangeType3 from './RecargasChangeType3'
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';


const createUser = ({ activeProvider, navigation }) => {

    const dispatch = useDispatch();
    const refRBSheet = useRef();


    useEffect(() => {

        const resetTypes = () => {

            const action = RecargasActions.saveActiveRecargas('Recargas')
            dispatch(action);


        };
        const resetProduct = () => {
            const action = ProductActions.setActiveProvider({})
            dispatch(action);
        }
        const resetPackage = () => {
            const action = RecargasActions.saveActivePackage({})
            dispatch(action)
        }
        resetTypes();
        resetProduct();
        resetPackage();
    }, []);

    const activeImage = () => {
        console.log(activeProvider)
        if (!isEmpty(activeProvider)) {
            return <Image source={beactiveImg} />
        }
        else {
            return <Image source={beImg} />
        }
    }

    const [toggleModel1, setToggleModel1] = useState(false);


    return (
        <>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container >
                    <Content style={{ flex: 1 }}>
                        <View style={styles.Contentcontainer}>

                            {/* <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: 'rgb(235,6,42)', padding: 8, paddingHorizontal: 13, borderRadius: 20 }}>
                                <Text style={{ color: 'white' }}>1</Text>
                            </View>
                            <View style={{ borderBottomWidth: 4, borderBottomColor: 'rgb(219,219,219)', width: 60, marginBottom: 13 }}></View>
                            <View style={{ backgroundColor: 'rgb(219,219,219)', padding: 8, paddingHorizontal: 13, borderRadius: 20 }}>
                                <Text style={{ color: 'rgb(177,177,177)' }}>2</Text>
                            </View>
                            <View style={{ borderBottomWidth: 4, borderBottomColor: 'rgb(219,219,219)', width: 60, marginBottom: 13 }}></View>

                            <View style={{ backgroundColor: 'rgb(219,219,219)', padding: 8, paddingHorizontal: 13, borderRadius: 20 }}>
                                <Text style={{ color: 'rgb(177,177,177)' }}>3</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 2 }}>
                            <View style={{ padding: 5, paddingHorizontal: 1, borderRadius: 20, marginLeft: -10 }}>
                                <Text style={{ color: 'rgb(235,6,42)', fontSize: 12 }}>Datos Personales</Text>
                            </View>

                            <View style={{ padding: 5, paddingHorizontal: 20, borderRadius: 20, marginLeft: 5 }}>

                                <Text style={{ color: 'rgb(177,177,177)', fontSize: 12 }}>Be Movil</Text>
                            </View>

                            <View style={{ padding: 5, paddingHorizontal: 15, borderRadius: 20, marginLeft: 10 }}>

                                <Text style={{ color: 'rgb(177,177,177)', fontSize: 12 }}>Revisión</Text>
                            </View>

                        </View> */}


                            <ProgressSteps
                                borderWidth={3}
                                borderStyle={'dotted'}
                                progressBarColor={'grey'}
                                activeStepIconBorderColor={'rgb(235,6,42)'}
                                activeStepIconColor={'rgb(235,6,42)'}
                                completedStepIconColor={'green'}
                                disabledStepIconColor={'#dadada'}
                                activeStepNumColor={'white'}
                                marginBottom={'4%'}
                                completedLabelColor={'green'}
                                activeLabelColor={'red'}
                            >
                                <ProgressStep

                                    label={'Datos Personales'}
                                    activeLabelColor={'red'}
                                    previousBtnDisabled={true}
                                    previousBtnText={''}
                                    nextBtnStyle={styles.nextBtnStyle} nextBtnTextStyle={{ color: '#ffff' }}
                                    previousBtnStyle={styles.previousBtnStyle}
                                    nextBtnText={'Recargas'}
                                >
                                    <View style={{ zIndex: 22, height: '50%' }}>
                                        {/* <Step1 /> */}
                                        <RecargasChangeType />
                                    </View>
                                </ProgressStep>

                                <ProgressStep
                                    label={'Datos Personales'}

                                    previousBtnDisabled={true}
                                    previousBtnText={''}
                                    nextBtnStyle={styles.nextBtnStyle} nextBtnTextStyle={{ color: '#ffff' }}
                                    previousBtnStyle={styles.previousBtnStyle}
                                    nextBtnText={'Continuar'}>
                                    <View style={{ marginBottom: '68%', }}>
                                        <RecargasChangeType2 />
                                    </View>
                                </ProgressStep>
                                <ProgressStep
                                    onSubmit={() => {
                                        console.log('sadasd')
                                        setToggleModel1(true)
                                    }
                                    }
                                    label={'Datos Personales'}
                                    previousBtnDisabled={true}
                                    previousBtnText={''}
                                    nextBtnStyle={{
                                        ...styles.nextBtnStyle,
                                        right: -40,
                                        backgroundColor: 'rgb(5,193,121)'
                                    }}
                                    nextBtnTextStyle={{ color: '#ffff' }}
                                    previousBtnStyle={styles.previousBtnStyle}
                                    nextBtnText={'Continuar'}
                                >
                                    <View style={{ marginBottom: '10%', }}>
                                        <RecargasChangeType3 />
                                    </View>
                                </ProgressStep>

                            </ProgressSteps>
                        </View>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={380} height={400} visible={toggleModel1} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}>
                    <ModalContent >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Image style={styles.bigLogo} source={bigLogo} />
                            <Image style={styles.CheckCircleOutline} source={CheckCircleOutline} />
                            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 20 }}>
                                Reparto Satisfactorio</Text>
                            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', fontWeight: '500', marginVertical: 5 }}>
                                Perfil Creado Satisfactoriamente
                                        </Text>
                            <Text style={{ fontSize: 12, color: 'rgb(5,193,121)', textAlign: 'center', fontWeight: '500' }}>
                                Perfil 2021</Text>
                            {/* <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Home')
                                }}
                                style={styles.btnTransfer}>
                                <Text style={{ color: '#ffff' }}>Terminar</Text>
                            </TouchableOpacity> */}
                            <Pressable onPress={() => {
                                setToggleModel1(false)
                                navigation.navigate('Home')
                            }}
                                style={styles.btnTransfer}>
                                <Text style={{ color: '#ffff' }}>Terminar</Text>
                            </Pressable>
                        </View>


                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>
        </>

    );
}

const styles = StyleSheet.create({
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


    container: {
        flex: 1,
    },
    nextBtnStyle: {
        height: 50, bottom: 0, right: -58, backgroundColor: 'red', borderRadius: 5,
        width: 375,
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    test: {
        backgroundColor: 'rgb(216,216,216)',

    },

    Contentcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: -15,
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

});



const mapStateToProps = ({ balance, product, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: product.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(createUser);
