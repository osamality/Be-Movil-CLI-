import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { profilData } from './staticData'
import LinearGradient from 'react-native-linear-gradient';

const renderPayment = ({navigation}) => {

    return profilData.map((d, v) => {
        return (
            <LinearGradient key={v} colors={['rgb(35,45,60)', 'rgb(57,72,93)']} style={styles.content}>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate(d.route)}>
                    <Image source={d.icon} style={styles.icon} />
                    <Text style={styles.Text}> {d.name} </Text>
                </TouchableOpacity >
            </LinearGradient>

        )
    })

}
const ProfileType = ({navigation}) => {
    return (
        // <View style={styles.Contentcontainer}>
        <LinearGradient colors={['rgb(57,72,93)', 'rgb(35,45,60)']} style={styles.Contentcontainer}>
            {renderPayment({navigation})}
        </LinearGradient>
        //  </View>
    )
}

const styles = StyleSheet.create({

    Contentcontainer: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 5,
        marginTop: -1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    content: {
        flexDirection: 'column',
        height: 80,
        margin: 5,
        flex: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 25,
        elevation: 8,
        padding: 15,
        borderRadius: 10,
        // marginHorizontal:12,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: Dimensions.get('window').width / 4.4 - 10, // Width / 3 - (marginLeft and marginRight for the components)

    },
    icon: {
        marginTop: 8,
        height: 18,
        width: 20
    },
    Text: {
        textAlign: 'center',
        width: 55,
        fontSize: 12,
        marginTop: 8,
        flex: 1,
        flexWrap: 'nowrap',
        color: '#ffff',



    }

})

export default ProfileType
