import React from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,Image, Dimensions } from 'react-native';
import {paymetData} from './TestData'

const renderPayment = ()=>{

    return paymetData.map((d,v)=>{
        return (
         <TouchableOpacity  key={v} style={styles.content}>
            <Image    source={d.icon} style={styles.icon}/>           
            <Text  style={styles.Text}> {d.name} </Text>
        </TouchableOpacity >

        )
    })

}
const PaymentType = () => {
    return (
         <View style={styles.Contentcontainer}>
            {renderPayment()}
        </View>
    )
}

const styles = StyleSheet.create({
    Contentcontainer:{
        flexDirection:'row',
        flex:1,
        width:'90%'

    },
    content:{
        flexDirection:'column',
        flex:1,
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        padding:15,
        borderRadius:10,
        marginHorizontal:12,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        maxWidth: Dimensions.get('window').width / 4 - 10, // Width / 3 - (marginLeft and marginRight for the components)

    },
    icon:{
       

    },
    Text:{
        textAlign:'center',
        width:'100%',
        fontSize:10,
        marginTop:7,
        flex:1,
        flexWrap:'nowrap',
        color: 'rgb(180,180,180)',

        
    }

})

export default PaymentType
