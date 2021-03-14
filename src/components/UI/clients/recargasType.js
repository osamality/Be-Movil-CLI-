import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { clientType } from '../staticData'
import * as RecargasActions from '../../../store/actions/recargas';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { map } from 'lodash'
import { isEmpty } from 'lodash'

const renderText = () => {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const setDefaultBalnce= async()=>{

    //         const action = balanceActions.saveActiveBalance(data.SS)
    //         try{
    //             await dispatch(action)
    //         }
    //         catch{
    //             console.log("Falied Balnace")
    //         }

    //     }
    //     setDefaultBalnce();

    // }, []);

    const setStatus = async (index, data) => {
        const action = RecargasActions.saveActiveRecargas(data.redux)
        setIndex(index);
        try {
            await dispatch(action)
        }
        catch {
            console.log("Falied Balnace")
        }
    }

    return map(clientType, (d, v) => {
        return (
            <TouchableOpacity key={v}
                style={index == v ? styles.contentActive : styles.content}
                onPress={() => setStatus(v, d)}
            >
                <Text  style={index == v ? styles.TextActive : styles.Text}> {d.name} </Text>
            </TouchableOpacity >
        )
    })

}
function RecargasType() {
    return (
        <View style={styles.Contentcontainer}>
            {renderText()}
        </View>
    )
}
const styles = StyleSheet.create({

    Contentcontainer: {
        flex: 1,
        flexDirection: 'row',
        // shadowColor: 'black',
        // shadowOpacity: 5.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 8,
        // elevation: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '60%',
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 9,
        backgroundColor: 'rgb(232,232,232)',
        borderRadius: 3

    },
    contentActive: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 9,
        backgroundColor: 'rgb(44,209,158)',
        borderRadius: 3
    },

    Text: {
        fontSize: 12,
        textAlign: 'center',
    },
    TextActive: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
    },
});



export default RecargasType
