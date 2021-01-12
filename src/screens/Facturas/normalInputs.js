import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Form,Button } from 'native-base';
import {TextInput} from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from 'react-redux';
import * as FacturasActions from '../../store/actions/Facturas';
import {connect} from 'react-redux';

const NormalInputs = ({initialValues,activeBalance,allBalance,activeProvider}) =>  {
    console.log(initialValues)
    const dispatch = useDispatch()
    const refRBSheet = useRef()
    const [index,setindex]=useState(0)
  return (
    <Form style={{marginTop:1}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Número de contador"
              value={initialValues.numero}
              mode='outlined'
              // keyboardType="text"
              onChangeText={text => dispatch(FacturasActions.setInitialValues({...initialValues,"numero":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
            />
        
              <TextInput
              label="Valor del Producto"
              value={initialValues.valor}
              style={defaultStyle.InputText1Style}
              mode='outlined'
              // keyboardType="text"
              onChangeText={text =>  dispatch(FacturasActions.setInitialValues({...initialValues,"valor":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
        
        
            />

             <TextInput
              label="Correo Electrónico"
              value={initialValues.correo}
              style={defaultStyle.InputText1Style}
              mode='outlined'
              // keyboardType="text"
              onChangeText={text =>  dispatch(FacturasActions.setInitialValues({...initialValues,"correo":text}))}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
        
        
            />
           
           <View style={{justifyContent:'space-around',flexDirection:'row'}}>
            
              <Button disabled={initialValues.numero!=='' && initialValues.valor!=='' && initialValues.correo!==''
              ?false:true}
              onPress={() => refRBSheet.current.open()}
              style={initialValues.numero !=='' && initialValues.valor !=='' && 
               activeProvider.name && initialValues.correo!=='' ?defaultStyle.buttonactive:defaultStyle.btn}>
                 <Text  style={{color:'#ffff'}}>Cargar</Text>
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
            <Text >{initialValues.Ciudad}</Text>
            </View>
            </View>
            <View style={defaultStyle.container}>
            <View 
            style={defaultStyle.textTable}>
            <Text>Valor:</Text>
            </View>
            <View style={defaultStyle.textTable1}>
            <Text >{initialValues.Matricula}</Text>
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
  );
}

const defaultStyle = StyleSheet.create({
  InputText1Style: {
    backgroundColor: '#fff',
    height:50,
    width:375,
    marginBottom:20
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
  const styles = StyleSheet.create({
    btnText:{
        color:'rgb(145,145,145)'
      },
      btnTextActive:{
        color:'#ffff'
    
      },
  })


const mapStateToProps = ({balance,Facturas}) => ({
    activeBalance:balance.activeBalance,
    allBalance :balance.balance,
    activeProvider : Facturas.activeProvider,
    initialValues:Facturas.initialValues,
    activeType : Facturas.activeType

      
  })
  
  
export default connect(mapStateToProps,null)(NormalInputs);