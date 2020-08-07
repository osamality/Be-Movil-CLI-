import React, { useState, useEffect } from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,Image, ScrollView, Dimensions,SafeAreaView } from 'react-native';

import {productsDiscription} from './TestData'
import {get} from 'lodash'



const renderItems = ()=>{
    const [index,setIndex]=useState(0);

  const data=get(productsDiscription,'Recargas',[]);
  return data.map((d,v)=>{
      return(
        <View style={styles.outer}>
          <TouchableOpacity 
          key={v} 
          style={v==index?styles.ItemContentActive:styles.ItemContent}
          onPress={()=>setIndex(v)}
          >
            <Image  source={d.icon} /> 
          
          </TouchableOpacity>
           {v==index&& <Text style={{color:'red'}}>{'\u2B24'}</Text>}
          </View>
      )

  })
   
}

const ProductType = ({ }) => {

    return (
        <SafeAreaView style={styles.Contentcontainer}>
        <ScrollView
         style={styles.scrollView} 
         horizontal={true}
         showsHorizontalScrollIndicator={false}
          >
          {renderItems()}
        </ScrollView>
      </SafeAreaView>
        )
    
}

const styles = StyleSheet.create({
    Contentcontainer:{
        flex: 1,
    },
    outer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'

    },

    ItemContent:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5
    },
    ItemContentActive:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        width:55,
        height:55,
        borderColor:'red',
        borderWidth:2,
        borderRadius:55/2,
        backgroundColor:'pink'

    },

  
    scrollView: {
        marginHorizontal: 5,
      },
  
})

export default ProductType
