import React, { useState, useEffect } from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,Image, ScrollView, Dimensions,SafeAreaView } from 'react-native';

import {productsDiscription} from '../staticData'
import {get, isEmpty} from 'lodash'
import * as betCompaniesActions from '../../../store/actions/betCompanies';
import { useDispatch } from 'react-redux';

import {connect} from 'react-redux';


const renderItems = (ActiveType, ActiveProvider)=>{
  const dispatch = useDispatch();

    const [index,setIndex]=useState();

    const handelClick = async(index,data)=>{
      setIndex(index)
     dispatch(betCompaniesActions.setActiveProvider(data))
     dispatch(betCompaniesActions.setIninalValues({
      "numeroDocumento":"",
      "Monto":""
  }))

    }

  const data=get(productsDiscription,ActiveType,[]);
  return data.map((d,v)=>{
      return(
        <View style={styles.outer} key={v}>
          {/* {v==index&& <Text style={{color:'red',width:10,height:2}}>{'\u2B24'}</Text>} */}
          <View style={index==v&&  !isEmpty(ActiveProvider) && styles.test}> 
            </View>
          <TouchableOpacity 
          key={v} 
          style={(v==index && !isEmpty(ActiveType)  && !isEmpty(ActiveProvider))  ?styles.ItemContentActive:styles.ItemContent}
          onPress={()=>handelClick(v,d)}
          >
           
          
            <Image  source={d.icon} style={(v==index  && !isEmpty(ActiveType)  && !isEmpty(ActiveProvider))?styles.imgactive:styles.ima}/> 
          </TouchableOpacity>
            <View style={(v==index  && !isEmpty(ActiveType)  && !isEmpty(ActiveProvider))?{marginTop:4}:{}}>

            </View>
          <Text style={styles.nameText}>{d.name}</Text>
          </View>
      )

  })
   
}

const ProductType = ({ ActiveType, ActiveProvider}) => {
    

    return (
        <SafeAreaView style={styles.Contentcontainer}>
        <ScrollView
         style={styles.scrollView} 
         horizontal={true}
         showsHorizontalScrollIndicator={false}
          >
          {renderItems(ActiveType, ActiveProvider)}
        </ScrollView>
      </SafeAreaView>
        )
    
}

const styles = StyleSheet.create({
    Contentcontainer:{
        flex: 1,
        marginBottom:20
    },
    outer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',

    },

    ItemContent:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        
        
    },
    ItemContentActive:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        width:50,
        height:50,
          borderColor:'rgb(44,209,158)',
          borderWidth:1,
        borderRadius:50/2,
        backgroundColor:'#ffff',
        overflow:"hidden"

    },
    imgactive:{
      height:46,
      width:46,
      borderRadius:46/2,
    },
    test:{
      borderWidth:2,
      borderColor:'rgb(44,209,158)',
      marginBottom:2,
      width:5,
      height:5,
      borderRadius:5/2

    },
    ima:{
      height:46,
      width:46

    },

  
    scrollView: {
        marginHorizontal: 5,
        width:385
      },

      nameText:{
        color:'rgb(145,145,145)',
        fontSize:10,
        marginTop:3
      },
     
  
})
const mapStateToProps = ({betCompanies}) => ({
    ActiveType : betCompanies.activeType,
    ActiveProvider : betCompanies.activeProvider
   
      
  })
  export default connect(mapStateToProps,null)(ProductType);

