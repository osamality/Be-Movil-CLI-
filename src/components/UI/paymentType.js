import React from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,Image, Dimensions } from 'react-native';
import {paymetData} from './staticData'
import LinearGradient from 'react-native-linear-gradient';

const renderPayment = ()=>{

    return paymetData.map((d,v)=>{
        return (
        <LinearGradient key={v} colors={['rgb(43,43,43)', 'rgb(85,85,85)']} style={styles.content}>
            
         <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} >
            <Image    source={d.icon} style={styles.icon}/>           
            <Text  style={styles.Text}> {d.name} </Text>
        </TouchableOpacity >
        </LinearGradient>

        )
    })

}
const PaymentType = () => {
    return (
        // <View style={styles.Contentcontainer}>
        <LinearGradient colors={['rgb(43,43,43)', 'rgb(85,85,85)']} style={styles.Contentcontainer}>
            {renderPayment()}
        </LinearGradient>
        //  </View>
    )
}

const styles = StyleSheet.create({
   
    Contentcontainer:{
        flexDirection:'row',
        flex:1,
        width:'100%',
        padding:5,
        marginTop:-1,
        justifyContent:'center',
        alignItems:'center',
        width: '100%'
    },
    content:{
        flexDirection:'column',
        height:80,
        margin:5,
        flex:1,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 25,
        elevation: 8,
        padding:15,
        borderRadius:10,
        // marginHorizontal:12,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        maxWidth: Dimensions.get('window').width / 4.4 - 10, // Width / 3 - (marginLeft and marginRight for the components)

    },
    icon:{
       marginTop:10

    },
    Text:{
        textAlign:'center',
        width:50,
        fontSize:11,
        marginTop:7,
        flex:1,
        flexWrap:'nowrap',
        color: '#ffff',
        

        
    }

})

export default PaymentType
