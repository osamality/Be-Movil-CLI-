import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { profileData } from '../pachageData';
import { get, filter, isEmpty } from 'lodash';
import { connect } from 'react-redux';

const Profiles = ({ activeProvider, navigation }) => {

    useEffect(() => {

    }, []);

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={profileData}
                renderItem={({ item }) => (
                    <>
                        <View
                            style={styles.container}>
                            <View style={styles.Contentcontainer}>
                                <Image
                                    style={styles.icon}
                                    source={item.icon}
                                />
                                <Text style={{ fontWeight: '700' }}>{item.name}</Text>
                            </View>
                            <Text style={styles.despContainer} numberOfLines={4}>{item.desp}</Text>
                            <TouchableOpacity style={styles.btnContainer}>
                                <Text style={{ color: 'white' }} numberOfLines={1}>Ver Mas</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                //Setting the number of column
                columnWrapperStyle={styles.flatlistWraper}
                contentContainerStyle={styles.flatlistContainer}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5,
        borderRadius: 10,

        alignItems: 'center',
        width: '40%',
        margin: 10,
        padding: 10,

    },
    btnContainer: {
        backgroundColor: 'rgb(235,6,42)',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4,
        borderRadius: 4,

        paddingVertical: 6,
        paddingHorizontal: '15%',
        alignItems: 'center',
        margin: 10,
    },
    flatlistContainer: {
        height: '100%',
        margin: 10,
        
    },
    flatlistWraper: {
        justifyContent: 'center',
    },
    Contentcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5
    },
    despContainer: {
        width: '70%',
        fontWeight: '300',
        margin: 10,
        fontSize: 13 
    },
    icon: {
        height: 25, width: 25,
        marginRight: 5
    }

});



const mapStateToProps = ({ balance, betCompanies, recargas }) => ({
    activeBalance: balance.activeBalance,
    activeProvider: betCompanies.activeProvider,
    RecargasActiveType: recargas.activeType

})


export default connect(mapStateToProps, null)(Profiles);


