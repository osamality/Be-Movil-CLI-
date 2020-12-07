import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import {Form,Button } from 'native-base';
import {TextInput} from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/FontAwesome5';
import arrowImage from '../../assets/Images/arrowBottm3.png';
import notactiveImage from '../../assets/Images/notactive.png';
import {isEmpty} from 'lodash';
import * as billeterasActions from '../../store/actions/billeteras';
import { useDispatch } from 'react-redux';

const activeImageInputs =(initialValuesDeposito,initialValuesRetiros,activeProvider, activeType)=>{

    if (isEmpty(activeProvider)){
        return <Image source={notactiveImage}/>

    }
    else{
        if(activeType == "Deposito"){

            if(initialValuesDeposito.Linea == '' || initialValuesDeposito.Monto_Recargar == ''){
                return <Image source={beImg}/>
            }
              else {
                return <Image source={beactiveImg}/> 
          
            }
        }
        else {
            if(initialValuesRetiros.Linea == '' || initialValuesRetiros.Valor == '' || initialValuesRetiros.Toquen == ''){
                return <Image source={beImg}/>
            }
              else {
                return <Image source={beactiveImg}/> 
          
            }
        }
       
    
    }
    
  }


  const renderInputs = (initialValuesDeposito,initialValuesRetiros,activeProvider,refRBSheet,activeType,allBalance,refRBSheetRetiros)=>{

    const dispatch=useDispatch()
    const [index,setindex]=useState(1)
    if(activeType == "Deposito"){
        return(
      
            <Form style={{marginTop:1}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Línea a Depositar*"
              value={initialValuesDeposito.Linea}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text => dispatch(billeterasActions.setInitialValuesDeposito({...initialValuesDeposito,"Linea":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
            />
        
              <TextInput
              label="Monto a Recargar*"
              value={initialValuesDeposito.Monto_Recargar}
              style={defaultStyle.InputText1Style}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text =>  dispatch(billeterasActions.setInitialValuesDeposito({...initialValuesDeposito,"Monto_Recargar":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
        
        
            />
           
           <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            
              <Button disabled={initialValuesDeposito.Linea!=='' && initialValuesDeposito.Monto_Recargar!==''?false:true}
              onPress={() => refRBSheet.current.open()}
              style={initialValuesDeposito.Linea!=='' && initialValuesDeposito.Monto_Recargar!=='' && activeProvider.name?defaultStyle.buttonactive:defaultStyle.btn}>
                 <Text  style={{color:'#ffff'}}>Recargas</Text>
                 </Button>
            </View>
            <View>
            <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={450}
            customStyles={{
            wrapper: {
              backgroundColor: "transparent",
              borderRadius:50,
              justifyContent:'center',
              alignItems:'center',
              flex:1
            },
            container:{
              borderRadius:50,
              justifyContent:'center',
              // flex:1,
              alignItems:'center'
            
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
            }}
            >
            <ScrollView  showsHorizontalScrollIndicator={false}
            >
            <View style={{alignItems:'center',flex:1}}>
            <Text  style={{fontWeight:'bold',fontSize:25}}>
            Confirmar Compra
            </Text>
            <Text  >
            Estas apunto de Recargar tu cuenta
            </Text> 
            {/* <Text style={{color:'rgb(235,6,42)'}}>
            Todo Incluido 30 Dias 
            
            </Text> */}
            
            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Producto:</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{activeProvider.name}</Text>
            </View>
            </View>
            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Celular:</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{initialValuesDeposito.Linea}</Text>
            </View>
            </View>
            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Valor:</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{initialValuesDeposito.Monto_Recargar}</Text>
            </View>
            </View>
            
            <Text  style={{fontWeight:'bold',fontSize:25, marginTop:10}}  >
            Realizar compra desde:       
            </Text>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
        
            <Button 
            style={index==1?defaultStyle.button1active :defaultStyle.button1}
            onPress={()=>setindex(1)}
            >
            <Text style={index==1? styles.btnTextActive:styles.btnText}>Mi Ahorro</Text>
            <Text style={index==1? styles.btnTextActive:styles.btnText}>{allBalance.SP}</Text>
        
            </Button>
            <Button
            onPress={()=>setindex(2)}
            style={index==2 ? defaultStyle.button1active : defaultStyle.button1}>
            <Text style={index==2? styles.btnTextActive:styles.btnText}>Mi Caja</Text>
            <Text style={index==2? styles.btnTextActive:styles.btnText}>{allBalance.ST}</Text>
        
            </Button>
            </View>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            
            <Button 
            style={defaultStyle.accecptBtn}>
            <Text  style={{color:'#ffff'}}>Aceptar</Text>
            </Button>
            </View>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            
            <Button 
            style={defaultStyle.cancelBtn}>
            <Text  style={{color:'rgb(158,159,159)'}}>Cancel</Text>
            </Button>
            </View>
            <View style={{marginTop:2}}>
        
            </View>
            </View>
            </ScrollView>
            </RBSheet>
            
            </View>
        
        </Form>
          )

    }
    else {
        return (
            <Form style={{marginTop:1}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Línea de Retiro*"
              value={initialValuesRetiros.Linea}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text => dispatch(billeterasActions.setinitialValuesRetiros({...initialValuesRetiros,"Linea":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
            />
        
              <TextInput
              label="Valor del Retiro *"
              value={initialValuesRetiros.Valor}
              style={defaultStyle.InputText1Style}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text =>  dispatch(billeterasActions.setinitialValuesRetiros({...initialValuesRetiros,"Valor":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
        
        
            />

           <TextInput
              label="Toquen NEQUI *"
              value={initialValuesRetiros.Toquen}
              style={defaultStyle.InputText1Style}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text =>  dispatch(billeterasActions.setinitialValuesRetiros({...initialValuesRetiros,"Toquen":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
        
        
            />
           
           <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            
              <Button disabled={initialValuesRetiros.Linea!=='' && initialValuesRetiros.Valor!=='' && initialValuesRetiros.Toquen!==''?false:true}
              onPress={() => refRBSheetRetiros.current.open()}
              style={initialValuesRetiros.Linea!=='' && initialValuesRetiros.Valor!==''  && initialValuesRetiros.Toquen!=='' && activeProvider.name?defaultStyle.buttonactive:defaultStyle.btn}>
                 <Text  style={{color:'#ffff'}}>Recargas</Text>
                 </Button>
            </View>
            <View>
            <RBSheet
            ref={refRBSheetRetiros}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={450}
            customStyles={{
            wrapper: {
              backgroundColor: "transparent",
              borderRadius:50,
              justifyContent:'center',
              alignItems:'center',
              flex:1
            },
            container:{
              borderRadius:50,
              justifyContent:'center',
              // flex:1,
              alignItems:'center'
            
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
            }}
            >
            <ScrollView  showsHorizontalScrollIndicator={false}
            >
            <View style={{alignItems:'center',flex:1}}>
            <Text  style={{fontWeight:'bold',fontSize:25}}>
            Confirmar Compra
            </Text>
            <Text  >
            Estas apunto de Recargar tu cuenta
            </Text> 
            {/* <Text style={{color:'rgb(235,6,42)'}}>
            Todo Incluido 30 Dias 
            
            </Text> */}
            
            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Producto:</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{activeProvider.name}</Text>
            </View>
            </View>
            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Celular:</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{initialValuesRetiros.Linea}</Text>
            </View>
            </View>
            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Valor:</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{initialValuesRetiros.Valor}</Text>
            </View>
            </View>

            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Toquen NEQUI</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{initialValuesRetiros.Toquen}</Text>
            </View>
            </View>
            
            <Text  style={{fontWeight:'bold',fontSize:25, marginTop:10}}  >
            Realizar compra desde:       
            </Text>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
        
            <Button 
            style={index==1?defaultStyle.button1active :defaultStyle.button1}
            onPress={()=>setindex(1)}
            >
            <Text style={index==1? styles.btnTextActive:styles.btnText}>Mi Ahorro</Text>
            <Text style={index==1? styles.btnTextActive:styles.btnText}>{allBalance.SP}</Text>
        
            </Button>
            <Button
            onPress={()=>setindex(2)}
            style={index==2 ? defaultStyle.button1active : defaultStyle.button1}>
            <Text style={index==2? styles.btnTextActive:styles.btnText}>Mi Caja</Text>
            <Text style={index==2? styles.btnTextActive:styles.btnText}>{allBalance.ST}</Text>
        
            </Button>
            </View>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            
            <Button 
            style={defaultStyle.accecptBtn}>
            <Text  style={{color:'#ffff'}}>Aceptar</Text>
            </Button>
            </View>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            
            <Button 
            style={defaultStyle.cancelBtn}>
            <Text  style={{color:'rgb(158,159,159)'}}>Cancel</Text>
            </Button>
            </View>
            <View style={{marginTop:2}}>
        
            </View>
            </View>
            </ScrollView>
            </RBSheet>
            
            </View>
        
        </Form>

        )
    }

   
  
}


const RecargasChange = ({activeProvider,initialValuesDeposito,initialValuesRetiros,activeType,allBalance}) =>  {
    const refRBSheet = useRef();
    const refRBSheetRetiros =useRef()


  return (
      <>
      <View style={styles.paymentContent}>
            {activeImageInputs(initialValuesDeposito,initialValuesRetiros,activeProvider,activeType)}
           <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
           Información de tu Cuenta :    
            </Text>
        </View>
         <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>
         </View>
         {renderInputs(initialValuesDeposito,initialValuesRetiros,activeProvider,refRBSheet,activeType,allBalance,refRBSheetRetiros)}
     
    
     </>
  );
}

const styles = StyleSheet.create({
  btnText:{
    color:'rgb(145,145,145)'
  },
  btnTextActive:{
    color:'#ffff'

  },
  
  paymentContent:{
    flexDirection: 'row',
    width: "100%",
    justifyContent:'flex-start',
    paddingHorizontal:20,
    // marginTop:10,
    alignItems:'center'
  },
  paymentText:{
    fontWeight:"bold",
    marginLeft:5
  },
  packages:{
      flexDirection:'row',
      width:'90%',
      justifyContent:'space-around',
      alignItems:'center',
      borderWidth:2,
      borderRadius:5,
      padding:10,
      backgroundColor:'black'
    //   marginTop:20
  },
  notactivePackages:{
    flexDirection:'row',
    width:'90%',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:2,
    borderColor:'rgb(219,219,219)',
    borderRadius:5,
    padding:10,
    backgroundColor:'rgb(219,219,219)'

  },
  DownloadIcon:{
      width:60,
      height:40,
      borderWidth:1,
      borderColor:"#ffff",
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'

  },
  Image:{
    width:17,
    height:17,


  }

});

const defaultStyle = StyleSheet.create({
    InputText1Style: {
        backgroundColor: '#fff',
        // paddingBottom:20,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        elevation: 2,
        // position: 'relative',
        height:39,
        width:375,
        marginBottom:20
        // marginLeft:5
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop:10
    },
  
    btn: {
      backgroundColor:'rgb(103 ,103 ,103)',
      borderRadius:5,
      // width: '80%',
      width:375,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:2
    },
    buttonactive:{
      backgroundColor:'red',
      width:375,
      borderRadius:5,
      // width: '80%',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:2

  
    },
    textTable: {
      backgroundColor:'#ffff',
      borderWidth:1,
      borderColor:'#0000',
      width: '30%',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'rgb(232,232,232)'
    },
    textTable1: {
      backgroundColor:'#ffff',
      borderWidth:1,
      borderColor:'#0000',
      width: '30%',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderLeftWidth:0,
      borderColor:'rgb(232,232,232)'
    },
    button1: {
      backgroundColor:'#ffff',
      borderWidth:1,
      borderColor:'rgb(177,177,177)',
      borderRadius:3,
      width: '30%',
      justifyContent:'center',
      alignItems:'center',
      margin:20,
      flexDirection:'column',

    },
    button1active:{
      flexDirection:'column',
      backgroundColor:'rgb(44,209,158)',
      borderWidth:1,
      borderColor:'rgb(44,209,158)',
      borderRadius:3,
      width: '30%',
      justifyContent:'center',
      alignItems:'center',
      margin:20,
    },
    accecptBtn:{
      margin:10,
      backgroundColor:'rgb(235,6,42)',
      borderRadius:5,
      width: '80%',
      justifyContent:'center',
      alignItems:'center'
    },
    cancelBtn:{
      backgroundColor:'#ffff',
      borderWidth:1,
      borderColor:'#0000',
      borderRadius:5,
      width: '80%',
      justifyContent:'center',
      alignItems:'center'
  
    }
  
  })

const mapStateToProps = ({balance,billeteras,recargas}) => ({
    activeBalance:balance.activeBalance,
    allBalance :balance.balance,
    activeProvider : billeteras.activeProvider,
    initialValuesDeposito : billeteras.initialValuesDeposito,
    initialValuesRetiros : billeteras.initialValuesRetiros,
    activeType : billeteras.activeType

      
  })
  
  
export default connect(mapStateToProps,null)(RecargasChange);







