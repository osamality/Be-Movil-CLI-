import React, { useState, useEffect } from 'react'
import { View, StyleSheet,Text, TouchableOpacity ,Image, ScrollView, Dimensions,SafeAreaView } from 'react-native';

import {productsDiscription} from '../staticData'
import {get, isEmpty} from 'lodash'
import * as certificadosActions from '../../../store/actions/certificados';
import { useDispatch } from 'react-redux';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import {connect} from 'react-redux';
import bigLogo from '../../../assets/Images/bigLogo.png'
import {Button } from 'native-base';

const renderItems = (ActiveType,setToggle)=>{
  const dispatch = useDispatch();

    const [index,setIndex]=useState();

    const handelClick = async(index,data)=>{

     setIndex(index)
     dispatch(certificadosActions.setActiveProvider(data))
     dispatch(certificadosActions.setTitle(data.title))
     dispatch(certificadosActions.resetInintalValues())
     setToggle(true)

    }

  const data=get(productsDiscription,ActiveType,[]);
  return data.map((d,v)=>{
      return(
        <View style={styles.outer} key={v}>
          {/* {v==index&& <Text style={{color:'red',width:10,height:2}}>{'\u2B24'}</Text>} */}
          <View style={index==v&&styles.test}> 
            </View>
          <TouchableOpacity 
          key={v} 
          style={(v==index && !isEmpty(ActiveType)) ?styles.ItemContentActive:styles.ItemContent}
          onPress={()=>handelClick(v,d)}
          >
           
            <Image  source={d.icon} style={(v==index  && !isEmpty(ActiveType))?styles.imgactive:styles.ima}/> 
          </TouchableOpacity>
            <View style={(v==index  && !isEmpty(ActiveType))?{marginTop:4}:{}}>

            </View>
          <Text style={styles.nameText}>{d.name}</Text>
          </View>
      )

  })
   
}

const ProductType = ({ ActiveType,activeProvider}) => {
    const [toggleModel ,setToggle] = useState(false)

    return (
        <>
        <SafeAreaView style={styles.Contentcontainer}>
        <ScrollView
         style={styles.scrollView} 
         horizontal={true}
         showsHorizontalScrollIndicator={false}
          >
          {renderItems(ActiveType, setToggle)}
        </ScrollView>
      </SafeAreaView>
      <Modal
   
      width={350}
      height={activeProvider.name == "SNR" ? 380 : 280}
      visible={toggleModel}
       modalAnimation={new SlideAnimation({
      slideFrom: 'top',
      })}>
   
   <ModalContent>
    <>
    <Image source={bigLogo} style={{width:350,justifyContent:'center',alignContent:'center'}} />
    {activeProvider.name == "SNR" ? <Text style={styles.PopupText}>
    Recuerde que este producto tiene un valor de <Text style={{...styles.PopupText, fontWeight:'bold'}}> $20.000 COP. </Text> En ciertos casos el tiempo 
    de respuesta a este producto puede ser superior a 2 minutos, dale tiempo y verifica el historial de transacciones antes de reenviarla
    </Text> 
    : <Text style={styles.PopupText}>
    Recuerde que este producto 
    tiene un valor de <Text style={{...styles.PopupText, fontWeight:'bold'}}>$35.000 COP</Text>
    </Text>}
 
    <View style={{justifyContent:'space-around',flexDirection:'row'}}>
    <Button 
        onPress={()=>setToggle(false)}
        style={styles.accecptBtn}>
            <Text  style={{color:'#ffff'}}>Continuar</Text>
    </Button>
    </View>
    </>
   </ModalContent>

</Modal>
      </>
)
    
}

const styles = StyleSheet.create({

    accecptBtn:{
        marginTop:20,
        marginBottom:10,
        backgroundColor:'rgb(235,6,42)',
        borderRadius:5,
        width: '50%',
        justifyContent:'center',
        alignItems:'center',
        height:40
      },
    PopupText:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:18
    },
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
const mapStateToProps = ({certificados}) => ({
    ActiveType : certificados.activeType,
    activeProvider : certificados.activeProvider
   
      
  })
  export default connect(mapStateToProps,null)(ProductType);

