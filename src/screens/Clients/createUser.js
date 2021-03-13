import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Image
} from 'react-native';
import { Container, Content, Form, Button } from 'native-base';
import { useDispatch } from 'react-redux';
import * as RecargasActions from '../../store/actions/recargas';
import * as ProductActions from '../../store/actions/product';

import CustomTapsBalance from '../../components/UI/globle/customTapsBalance';
import { connect } from 'react-redux';
import RecargasType from '../../components/UI/Recargas/recargasType'
import ProductType from '../../components/UI/Recargas/productType'
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import { isEmpty } from 'lodash'
import RecargasChangeType from './RecargasChangeType'


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



    return (


        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <Container >

                <Content style={{ flex: 1 }}>

                    <View style={styles.Contentcontainer}>


                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ backgroundColor: 'rgb(235,6,42)', padding: 8, paddingHorizontal: 13, borderRadius: 20 }}>
                                <Text style={{ color: 'white' }}>1</Text>
                            </View>
                            <View style={{ borderBottomWidth: 4, borderBottomColor: 'rgb(219,219,219)', width: 60, marginBottom: 13 }}></View>
                            <View style={{ backgroundColor: 'rgb(219,219,219)',  padding: 8, paddingHorizontal: 13, borderRadius: 20 }}>
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

                                <Text style={{ color: 'rgb(177,177,177)', fontSize: 12  }}>Be Movil</Text>
                            </View>

                            <View style={{ padding: 5, paddingHorizontal: 15, borderRadius: 20, marginLeft: 10}}>

                                <Text style={{ color: 'rgb(177,177,177)', fontSize: 12  }}>Revisión</Text>
                            </View>

                        </View>
                        <RecargasChangeType navigation={navigation} />


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

    test: {
        backgroundColor: 'rgb(216,216,216)',

    },

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
