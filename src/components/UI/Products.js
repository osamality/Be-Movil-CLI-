import React, { useState, useEffect } from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,Image, FlatList, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {productsData} from './staticData'
import {singelProduct} from './staticData'
import {productsDiscription} from './staticData'
import {get} from 'lodash'




const Products = ({navigation }) => {
    const [stuts,setStuts]=useState(null)

    useEffect(() => {
        const checkPos= async()=>{
            
        AsyncStorage.getItem('token')
           .then((userData)=>{
             const restult =JSON.parse(userData)
             const {pos}=restult
              setStuts(pos)
            })

        .catch((err)=>{
        })
        
  }
        checkPos();
            
    }, []);

    

    const handelPress =()=>{
        const data =[{"product_id":1},{"product_id":20}];
        const test =get(productsDiscription,"Recargas",{})
        const result=[];
        data.map((d,v)=>{
            test.map((a,b)=>{
                if(d.product_id==a.id){
                    result.push(a)
                }
               
    
            })
        })
    
    
    
    }
    

    if(stuts == 1){

        return (
             <View style={styles.Contentcontainer}>
                <FlatList
                 horizontal={false}
                 numColumns={3}
                 data={productsData}
                 renderItem={({item,index}) => (
                 <TouchableOpacity  key={index} style={styles.content} onPress={() => navigation.navigate(item.route)}>
                   <View style={styles.ItemContent}>
                      <Image    source={item.icon} style={styles.icon}/>           
                      <Text  style={styles.Text}> {item.name} </Text>
                    </View>
              </TouchableOpacity > 
                 )}
            />
            </View>
        )
    }
    else {
        return (
            <View style={styles.Contentcontainer}>
                <FlatList
                 horizontal={false}
                 numColumns={3}
                 data={singelProduct}
                 renderItem={({item,index}) => (
                 <TouchableOpacity  key={index} style={styles.content} onPress={() => navigation.navigate('Recargas')}>
                   <View style={styles.ItemContent}>
                      <Text  style={styles.Text}> {item.name} </Text>
                      <Image    source={item.icon} style={styles.icon}/>           
                    </View>
              </TouchableOpacity > 
                 )}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Contentcontainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width:'90%'

    },
    content:{
    
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',    
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius:5,
        padding:20,        
        // maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
        margin:8,
        // height:100,
        // maxHeight:Dimensions.get('window').width / 3 - 10,
        
    },
    ItemContent:{
        // width:50,
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%'
        // backgroundColor:'red'
       

    },
    Text:{
        textAlign:'center',
        width:50,
        fontSize:11,
        marginTop:7,
        flex:1,
        flexWrap:'nowrap',
        color: 'black',

        
    }

})

export default Products
