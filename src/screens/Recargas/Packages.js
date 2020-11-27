import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView,SafeAreaView,TouchableOpacity,FlatList } from 'react-native';
import {packgesTaps} from './pachageData'
import {connect} from 'react-redux'
import {packgesData} from './pachageData'
import {get, filter, isEmpty} from 'lodash'
import {Button} from 'native-base'
import * as RecargasActions from '../../store/actions/recargas'
import { useDispatch } from 'react-redux';

const RenderItems =({setType})=>{
    
    const [index,setIndex]=useState(0);
    
    const handelPress=(index,data)=>{
        setIndex(index);
        setType(data.name)

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

  const [type,setType]=useState('Combos')
  const dispatch = useDispatch();

  const handelPress = async (data)=>{
    const action= RecargasActions.saveActivePackage(data);
    try {
      await dispatch(action)
      navigation.navigate('Recargas')
    }
    catch {
      console.log("ERROR")

    }
    
  }


    
const dataType = get(packgesData,activeProvider.package,'')

const data = filter(dataType[0].items, (item) =>{ return item.type== type; })
 
  return (
      <View style={styles.container}>
        <SafeAreaView style={styles.containercontetnt}>
        <ScrollView
         style={styles.scrollView} 
         horizontal={true}
         showsHorizontalScrollIndicator={false}
          >
            <RenderItems setType={setType}/>
          {/* {renderItems(setType)} */}
        </ScrollView>
      </SafeAreaView>
      <View style={{flex:1,justifyContent:'center', width:'100%'}}>
      {!isEmpty(data)?<FlatList
                 horizontal={false}
                 numColumns={1}
                 data={data}
                 renderItem={({item,index}) => (
                   <TouchableOpacity  key={index} style={styles.item}
                   onPress={()=>handelPress(item)}
                   >
                   <View style={{width:'70%',
                   marginRight:10,
                   justifyContent:'center',
                   alignItems:'center',

                   }} >
                     <View style={{
                      width:'100%',
                      backgroundColor:'rgb(244,244,244)',
                      borderWidth:1,
                      borderColor:'rgb(244,244,244)',
                      marginBottom:3,
                      flex:1
                     }}>

                      <Text style={{
                      fontWeight:'bold',
                      textAlign:'left',
                      lineHeight: 20,
                     
                      }}> {item.name} </Text>
                     </View>
                     <View style={{
                       width:'100%',
                       flex:1,
                     
                     }}>
                      <Text 
                      style={{
                        lineHeight: 20,
                        textAlign:'left',
                    
                      }}
                      numberOfLines={2} 
                      ellipsizeMode='middle'
                      > {item.description} </Text>

                     </View>
                     
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
            : <View style={styles.EmptyContetnt}>
              <Text style={styles.EmptyMessage}>Not Avalibale Packages</Text>
            </View>
          }
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
  EmptyContetnt:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  EmptyMessage:{
    color:'red',
    fontSize:18,
    fontWeight:'bold'
  }
});

const mapStateToProps = ({balance,product,recargas}) => ({
    activeProvider : product.activeProvider,
      
  })
  
  
export default connect(mapStateToProps,null)(Packages);
