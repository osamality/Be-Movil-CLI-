import React, { useState, useEffect } from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,Image, FlatList, Dimensions,AsyncStorage } from 'react-native';
import {productsData} from './TestData'
import {singelProduct} from './TestData'
import {productsDiscription} from './TestData'
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
            console.log(err)
        })
        
  }
        checkPos();
            
    }, []);

    

    const handelPress =()=>{
        // console.log("heeeeee")
        const data =[{"product_id":1},{"product_id":20}];
        const test =get(productsDiscription,"Recargas",{})
        const result=[];
        data.map((d,v)=>{
            test.map((a,b)=>{
                if(d.product_id==a.id){
                    result.push(a)
                }
                // console.log("out",d,v)
                // console.log("inner",a,b)
    
            })
        })
        console.log(result)
    
    
    
    }
    

    if(stuts == 1){

        return (
             <View style={styles.Contentcontainer}>
                <FlatList
                 horizontal={false}
                 numColumns={3}
                 data={productsData}
                 renderItem={({item,index}) => (
                 <TouchableOpacity  key={index} style={styles.content} onPress={() => navigation.navigate('Recargas')}>
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
        width:'80%'

    },
    content:{
        flexDirection:'row',
        shadowColor: 'black',
        shadowOpacity: 5.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius:15,
        padding:15,        
        flex:1,
        maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
        justifyContent: 'center',
        alignItems:'center',    
        margin:8
        
    },
    ItemContent:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
       

    },
    Text:{
        textAlign:'center',
        width:'100%',
        fontSize:12,
        marginTop:7,
        flex:1,
        flexWrap:'nowrap',
        color: 'black',

        
    }

})

export default Products
