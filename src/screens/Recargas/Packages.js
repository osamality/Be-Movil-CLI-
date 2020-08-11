import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView,SafeAreaView,TouchableOpacity,FlatList } from 'react-native';
import {packgesTaps} from './pachageData'
import {connect} from 'react-redux'
import {packgesData} from './pachageData'
import {get, filter} from 'lodash'
import {Button} from 'native-base'


const renderItems =()=>{
    
    const [index,setIndex]=useState(0);
    
    const handelPress=(index,data)=>{
        setIndex(index)

    }

    return packgesTaps.map((d,v)=>{
        return (
            <TouchableOpacity key={v}
             style={index==v?styles.tapactive:styles.tap}
             onPress={()=>handelPress(v,d)}
             >
               <Text style={styles.tapText}> {d.name} </Text>
            </TouchableOpacity>
        )
    })

}
const Packages = ({activeProvider,navigation}) =>  {

    
const dataType = get(packgesData,'paqueclaro','')
// console.log(dataType[0].items)

const data = filter(dataType[0].items, (item) =>{ return item.type== "Internet"; })
console.log(data)
 
  return (
      <View style={styles.container}>
        <SafeAreaView style={styles.containercontetnt}>
        <ScrollView
         style={styles.scrollView} 
         horizontal={true}
         showsHorizontalScrollIndicator={false}
          >
          {renderItems()}
        </ScrollView>
      </SafeAreaView>
      <View style={{flex:1,justifyContent:'center', width:'100%'}}>
      <FlatList
                 horizontal={false}
                 numColumns={1}
                 data={data}
                 renderItem={({item,index}) => (
                 <TouchableOpacity  key={index} style={styles.item}
                 onPress={()=>navigation.navigate('Recargas')}
                 >
                   <View style={{width:'70%'
                   ,marginRight:10,
                   justifyContent:'center',
                   alignItems:'center',

                   }} >
                      <Text style={{justifyContent:'center',
                      alignItems:'center',
                      textAlign:'center',
                      marginBottom:5,
                      fontWeight:'bold',
                      backgroundColor:'rgb(244,244,244)',
                      borderWidth:1,
                      borderColor:'rgb(244,244,244)'

                      }}> {item.name} </Text>
                      <Text style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}> {item.description} </Text>
                    </View>
                    <View style={{width:'30%',marginLeft:10,
                 justifyContent:'center',
                 alignItems:'center',
                 }}>
                        <Text style={{justifyContent:'center',
                      alignItems:'center',
                      textAlign:'center',
                      marginBottom:10,fontWeight:'bold'

                      }}>
                            {item.price}

                        </Text>
                        <Button
                style={styles.buttonactive}>
             <Text  style={{color:'#ffff'}}>Seleccionar</Text>
             </Button>
                        
                    </View>
              </TouchableOpacity > 
                 )}
            />
      </View>
      </View>

  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containercontetnt:{
      flex:0.1,
      alignItems:'center',
      justifyContent:'center',  
    //   width:'100%',
      backgroundColor:'black',


  },
  tap:{
      backgroundColor:'black',
      flex:1,
      borderWidth:1,
      borderColor:'#ffff',
      height:30,
      padding:10,
      marginHorizontal:5,
      borderRadius:5,
      justifyContent:'center'
  },
  tapactive:{
    backgroundColor:'rgb(145,145,145)',
    flex:1,
    borderWidth:1,
    borderColor:'#ffff',
    height:30,
    padding:10,
    marginHorizontal:5,
    borderRadius:5,
    justifyContent:'center'
  },
  tapText:{
      color:"#ffff"

  },
  scrollView: {
      backgroundColor:'black',

    marginHorizontal: 5,
  },
  item:{
    shadowColor: 'black',
    shadowOpacity: 5.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius:8,
    padding:15,        
    flex:1,
    justifyContent: 'space-around',
    alignItems:'center',    
    margin:8,
    flexDirection:'row',
   
  },
  buttonactive:{
    backgroundColor:'red',
    borderRadius:4,
    marginTop:5,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    height:35

  },
});

const mapStateToProps = ({balance,product,recargas}) => ({
    activeProvider : product.activeProvider,
      
  })
  
  
export default connect(mapStateToProps,null)(Packages);
