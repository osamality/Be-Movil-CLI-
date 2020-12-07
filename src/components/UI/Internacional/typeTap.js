import React,{useState,useEffect} from 'react'
import { View, StyleSheet,Text, TouchableOpacity , } from 'react-native';
import {InternacionalTypes} from './data'
import * as InternacionalActions from '../../../store/actions/Internacional';
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux';
import {map} from 'lodash'
import {isEmpty} from 'lodash'

const renderText = ()=>{
    const [index,setIndex]=useState(0);
    const dispatch = useDispatch();


    const setStatus = async(index,data)=>{
       dispatch(InternacionalActions.setActiveType(data.redux))
       dispatch(InternacionalActions.setActiveProvider({}))
       dispatch(InternacionalActions.resetInintalValues())

    //    dispatch(BetCompanies.setIninalValues({
    //        "numeroDocumento":"",
    //        "Monto":""
    //    }))

        setIndex(index);
    }

    return map(InternacionalTypes,(d,v)=>{
        return (
            <TouchableOpacity  key={v} 
             style={index==v? styles.contentActive:styles.content}
             onPress={()=> setStatus(v,d)}

            >
                <Text  style={styles.Text}> {d.name} </Text>
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

    Contentcontainer:{
        flex:1,
        flexDirection:'row',
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '60%',
        borderRadius:5,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
       

    },
    content:{
        flex:1,
        flexDirection:'column',
        paddingVertical:8,
    },
    contentActive:{
        flex:1,
        flexDirection:'column',
        paddingVertical:8,
        backgroundColor:'rgb(44,209,158)',
        borderRadius:3
    },

    Text:{
       fontSize:10,
       textAlign:'center'

    },

  });



export default  RecargasType
