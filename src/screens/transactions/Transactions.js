import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    FlatList,
    SectionList,
    Image
} from 'react-native';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import bigLogo from "../../assets/Images/bigLogo.png"
import Close from "../../assets/Images/Close.png"


import { packgesData } from './pachageData';
import { connect } from 'react-redux';

const Products = ({ activeProvider, navigation }) => {
    const [toggleModel, setToggleModel] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <>
            <View style={styles.Contentcontainer}>
                <ScrollView
                    style={{
                        width: '100%'
                    }}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <FlatList
                        horizontal={false}
                        // numColumns={1}

                        ListHeaderComponent={() => {
                            return (
                                <View
                                    style={styles.headerStyle}
                                >
                                    <Text
                                        style={{ ...styles.headerText, marginRight: 100, marginLeft: 15 }}
                                    >ID</Text>
                                    <Text
                                        style={{ ...styles.headerText, marginRight: 50 }}
                                    >Fecha</Text>
                                    <Text
                                        style={{ ...styles.headerText, marginRight: 60 }}
                                    >Valor</Text>
                                    <Text
                                        style={{ ...styles.headerText, marginRight: 20 }}
                                    >Servicio</Text>
                                    <Text
                                        style={{ ...styles.headerText, marginRight: 20 }}
                                    >Estado</Text>
                                    <Text
                                        style={{ ...styles.headerText, marginRight: 20 }}
                                    >Archivos</Text>
                                </View>
                            )
                        }}
                        data={packgesData}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={index} style={styles.listHeaderStyle} onPress={setToggleModel(true)}>
                                    {/* <Image source={item.icon} style={styles.icon} /> */}
                                    <Text
                                        style={{ ...styles.listText, textDecorationLine: 'underline' }}
                                    >{item.ID}</Text>
                                    <Text
                                        style={styles.listText}
                                    >{item.Fecha}</Text>
                                    <Text
                                        style={styles.listText}
                                    >{item.Valor}</Text>
                                    <Text
                                        style={styles.listText}
                                    >{item.Servicio}</Text>
                                    <Text
                                        style={styles.listText}
                                    >{item.Estado}</Text>
                                    <Text
                                        style={styles.listText}
                                    >{item.Archivos}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal width={'100%'} height={'100%'} visible={toggleModel} modalAnimation={new SlideAnimation({ slideFrom: 'top', })}
                    modalTitle={
                        <View style={styles.titleModal2}>
                            <Text style={styles.closeBtn} onPress={() => {
                                setToggleModel2(false)
                            }}>
                                <Image source={Close} /></Text>
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
                            {/* <Button
                                onPress={() => {
                                    setToggleModel(false)
                                }}
                                style={styles.btnTransfer}>
                                <Text style={{ color: '#ffff' }}>Transferir Balance</Text>
                            </Button> */}
                        </View>


                    </ModalContent>
                </Modal>
            </TouchableWithoutFeedback>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    Contentcontainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%'

    },
    content: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: 'black',
        // shadowOpacity: 5.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 8,
        // elevation: 5,
        // backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 1,
        elevation: 8,
        // background color must be set
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 0,
        // maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
        margin: 13,
        // height:100,
        // maxHeight:Dimensions.get('window').width / 3 - 10,

    },
    ItemContent: {
        // width:50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
        // backgroundColor:'red'


    },
    Text: {
        textAlign: 'center',
        width: 100,
        fontSize: 11,
        marginTop: 7,
        flex: 1,
        flexWrap: 'nowrap',
        color: 'black',
        lineHeight: 17


    },
    headerStyle: {
        // width: '180%',
        backgroundColor: 'rgb(57,72,93)',
        flexDirection: 'row',
        paddingHorizontal: '10%',
        paddingVertical: '1%'
    },
    headerStyle2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '56%',
    },
    headerText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15
    },
    listText: {
        fontWeight: '300',
        fontSize: 15,
        marginHorizontal: 5,
        borderBottomWidth: 1, borderBottomColor: 'rgb(216,216,216)',
        paddingBottom: '1%',
    },
    listHeaderStyle: {
        // backgroundColor: 'rgb(57,72,93)',

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '2%',
        paddingVertical: '2%'

    },
    listHeaderStyle2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '55%',
        alignItems: 'center',
        paddingHorizontal: '6%'
    },
    listHeaderText: {
        color: 'black',
        fontWeight: '300',
        fontSize: 13
    },
    item: {
        flexDirection: 'row',
    },
    icon: {
        height: 16,
        width: 16,
        marginRight: '1%'
    },
    titleModal2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(225,6,52)',
        height: 100,
        marginTop: 20,
    },
    closeBtn: {
        color: '#ffff',
        textAlign: 'left',
        width: '8%',
        marginTop: 6
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



const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: betCompanies.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(Products);


