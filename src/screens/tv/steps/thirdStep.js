import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, Platform ,Image} from 'react-native';
import {Form,Button } from 'native-base';
import {TextInput,} from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from 'react-redux';
import * as TvActions from '../../../store/actions/Tv';
import {connect} from 'react-redux';
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import bigLogo from '../../../assets/Images/bigLogo.png'
const ThirdStep = ({activeProvider,thirdStepData,firstStepData,secondStepData, navigation}) =>  {
    const dispatch = useDispatch()
    const refRBSheet = useRef(null)
    const [toggleModel, setToggle] = useState(false)
   
      const onFormSubmit = (values)=>{
          dispatch(TvActions.setThirdStepDataTv(values))
          setToggle(true)
          
      }


    const  hideMenu = () => {
      refRBSheet.current.hide();
      };
     
     const showMenu = () => {
      refRBSheet.current.show();
      };

     

  return (
      <>
    <Formik
    initialValues={{...thirdStepData}}
    // validationSchema={validationSchema}
    onSubmit={onFormSubmit}
    enableReinitialize ={true}
    // validateOnChange={false}
    // validateOnBlur={true}
    // isInitialValid={true}
   >
    {({values,setFieldValue,isSubmitting,handleBlur,isValid,handleSubmit, errors,touched })  => {
     
        return (
   
        <Form style={{marginTop:1}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>
            <View style={{width:'96%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Cantidad"
              value={values.Cantidad}
              mode='outlined'
              onChangeText={text => setFieldValue("Cantidad",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Cantidad")}
            //   style={{marginBottom:2}}
            />
            
           {/* {touched.Nombre && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Nombre}</Text>} */}
            </View>
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>

            <View  style={{width:'96%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Valor Producto"
              value={values.Valor}
              mode='outlined'
              onChangeText={text => setFieldValue("Valor",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Valor")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Apellido && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Apellido}</Text>} */}

            </View>
            </View>

             <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>
            <View style={{width:'96%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Total Envió (No comisionable)"
              value={values.Total}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text => setFieldValue("Total",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Total")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Cedula && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Cedula}</Text>} */}

            </View>
            
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>
            <View style={{width:'96%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Total Venta"
              value={values.Total_Venta}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text => setFieldValue("Total_Venta",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Total_Venta")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Celular && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Celular}</Text>} */}

            </View>
            </View>
        
            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>

           <View style={{justifyContent:'space-around',flexDirection:'row',width:'96%'}}>
            
              <Button disabled={values.Total_Venta !== '' 
              &&values.Total !== '' 
              && values.Valor !== '' 
              && values.Cantidad !== '' 
               ?false:true}
              
              onPress={handleSubmit}
              style={values.Total_Venta !== '' 
              &&values.Total !== '' 
              && values.Valor !== '' 
              && values.Cantidad !== '' 
               ?defaultStyle.buttonactive:defaultStyle.btn}>
                 <Text  style={{color:'#ffff'}}>Continue</Text>
                 </Button>
            </View>
            </View>
        
        </Form>
   
        )}}

   </Formik> 
   <Modal
   
    width={350}
    height={ 460}
    visible={toggleModel}
     modalAnimation={new SlideAnimation({
    slideFrom: 'top',
    })}>
 
 <ModalContent>
  <>
  <Image source={bigLogo} style={{width:350,justifyContent:'center',alignContent:'center'}} />
  <View style={PopUpStyle.container}>
    <View 
    style={PopUpStyle.textTable}>
    <Text>Nombre:</Text>
    </View>
    <View style={PopUpStyle.textTable1}>
    <Text >{firstStepData.Nombre}</Text>
    </View>
    </View>

    <View style={PopUpStyle.container}>
    <View 
    style={PopUpStyle.textTable}>
    <Text>Producto:</Text>
    </View>
    <View style={PopUpStyle.textTable1}>
    <Text >{activeProvider?.name}</Text>
    </View>
    </View>

    <View style={PopUpStyle.container}>
    <View 
    style={PopUpStyle.textTable}>
    <Text>Telefono:</Text>
    </View>
    <View style={PopUpStyle.textTable1}>
    <Text >{}</Text>
    </View>
    </View>

    <View style={PopUpStyle.container}>
    <View 
    style={PopUpStyle.textTable}>
    <Text>Dirección:</Text>
    </View>
    <View style={PopUpStyle.textTable1}>
    <Text >{secondStepData.Direccion}</Text>
    </View>
    </View>

    <View style={PopUpStyle.container}>
    <View 
    style={PopUpStyle.textTable}>
    <Text>Ciudad:</Text>
    </View>
    <View style={PopUpStyle.textTable1}>
    <Text >{secondStepData.Ciudad}</Text>
    </View>
    </View>

    <View style={PopUpStyle.container}>
    <View 
    style={PopUpStyle.textTable}>
    <Text>Departamento:</Text>
    </View>
    <View style={PopUpStyle.textTable1}>
    <Text >{secondStepData.Departamento}</Text>
    </View>
    </View>

    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:8}}>
        <Text style={{color:'black',fontSize:18,fontWeight:'bold',textAlign:'center'}}>
            Total Venta : {thirdStepData.Total}
        </Text>
        <Text style={{color:'black',fontSize:15,textAlign:'center'}}>
        Total Envió (No comisionable) : {thirdStepData.Total_Venta}
        </Text>
        <Text style={{color:'black',fontSize:15,textAlign:'center'}}>
            Total a descontar : {thirdStepData.Total + thirdStepData.Total_Venta}
        </Text>
    </View>


  <View style={{justifyContent:'space-around',flexDirection:'row',marginBottom:5}}>
  <Button 
      onPress={()=>{setToggle(false),navigation.navigate('Home')}}
      style={defaultStyle.accecptBtn}>
          <Text  style={{color:'#ffff'}}>Continuar</Text>
  </Button>
  </View>
  </>
 </ModalContent>

</Modal>
  </>

  )
}

const defaultStyle = StyleSheet.create({
    select:{
        backgroundColor: '#fff',
        height:45,
        // width:"100%",
        marginHorizontal:10,
        marginBottom:2,
        borderColor :"grey",
        borderWidth:1,
        borderRadius : 4
    },
    containerStyle: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
      },
    InputText1Style: {
        backgroundColor: '#fff',
        // paddingBottom:20,
        // shadowColor: '#000',
        // shadowOpacity: 0.4,
        // elevation: 2,
        // position: 'relative',
        
        height:50,
        // width:"100%",
        marginHorizontal:10,
        marginBottom:15
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
      width: '95%',
      // width:375,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:2
    },
    buttonactive:{
      backgroundColor:'red',
      // width:375,
      borderRadius:5,
      width: '95%',
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
        marginTop:20,
        marginBottom:15,
        backgroundColor:'rgb(235,6,42)',
        borderRadius:5,
        width: '50%',
        justifyContent:'center',
        alignItems:'center',
        height:40
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

  const PopUpStyle = StyleSheet.create({
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
      marginTop:10,
      width:'100%'
    },
  
    btn: {
      backgroundColor:'rgb(103 ,103 ,103)',
      borderRadius:5,
      // width: '80%',
      width:375,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonactive:{
      backgroundColor:'red',
      width:375,
      borderRadius:5,
      // width: '80%',
      justifyContent:'center',
      alignItems:'center'
  
    },
    textTable: {
      backgroundColor:'#ffff',
      borderWidth:1,
      borderColor:'#0000',
      width: '40%',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'rgb(232,232,232)'
    },
    textTable1: {
      backgroundColor:'#ffff',
      borderWidth:1,
      borderColor:'#0000',
      width: '60%',
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


const mapStateToProps = ({balance,TvReducer}) => ({
    activeBalance:balance.activeBalance,
    allBalance :balance.balance,
    activeProvider : TvReducer.activeProvider,
    initialValues: TvReducer.initialValues,
    activeType : TvReducer.activeType,
    thirdStepData : TvReducer.wizard?.thirdStepData,
    secondStepData : TvReducer.wizard?.secondStepData,
    firstStepData : TvReducer.wizard?.firstStepData,


      
  })
  
  
export default connect(mapStateToProps,null)(ThirdStep);