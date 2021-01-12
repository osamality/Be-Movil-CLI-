import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, Platform ,SafeAreaView} from 'react-native';
import {Form,Button } from 'native-base';
import {TextInput,} from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from 'react-redux';
import * as TvActions from '../../../store/actions/Tv';
import {connect} from 'react-redux';
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {flatMap, isEmpty} from 'lodash'
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import ModalSelector from 'react-native-modal-selector'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import SelectField from "./select"
const RuntInputs = ({activeProvider,firstStepData}) =>  {
    const dispatch = useDispatch()
    const refRBSheet = useRef(null)

    const validationSchema= Yup.object({
        Nombre: Yup.string().required("Campo Requerido"),
        Apellido: Yup.string().required("Campo Requerido"),
        Documento: Yup.string().required("Campo Requerido"),
        Cedula: Yup.string().required("Campo Requerido"),
        Celular: Yup.string().required("Campo Requerido"),
        Correo: Yup.string().required("Campo Requerido"),
       
      })
      const onFormSubmit = (values)=>{
          console.log(values)
          dispatch(TvActions.setActiveStepTv(1))
          dispatch(TvActions.setFirstStepData(values))
          
      }


    const  hideMenu = () => {
      refRBSheet.current.hide();
      };
     
     const showMenu = () => {
      refRBSheet.current.show();
      };

     

  return (
    <Formik
    initialValues={{...firstStepData}}
    validationSchema={validationSchema}
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
            <View style={{width:'48%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Nombre"
              value={values.Nombre}
              mode='outlined'
              onChangeText={text => setFieldValue("Nombre",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Nombre")}
            //   style={{marginBottom:2}}
            />
            
           {/* {touched.Nombre && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Nombre}</Text>} */}
            </View>
            <View  style={{width:'48%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Apellido"
              value={values.Apellido}
              mode='outlined'
              onChangeText={text => setFieldValue("Apellido",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Apellido")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Apellido && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Apellido}</Text>} */}

            </View>
            </View>

             <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>

          
                <View style={{width:'48%'}}>
                <Menu
          ref={refRBSheet}
        //   button={<Text onPress={this.showMenu}>Show menu</Text>}
        button = {
            <TextInput  style={defaultStyle.InputText1Style}
            label="Documento"
            value={values.Documento}
            mode='outlined'
            // onChangeText={text => setFieldValue("Apellido",text)}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
            editable={false}
            onTouchStart = {showMenu}
            
            right={<TextInput.Icon
            style={{marginTop:10}}
            color="grey"
            onPress = {showMenu}
                name="chevron-down"
            />}
            // onPress={this.showMenu}
            // onBlur={handleBlur("Apellido")}
          //   style={{marginBottom:2}}
          />
        }
        >
          <MenuItem onPress={()=>{setFieldValue("Documento","cc"),hideMenu()}} filter="test">CC</MenuItem>
          <MenuItem onPress={()=>{setFieldValue("Documento","Pasaporte"),hideMenu()}}>Pasaporte</MenuItem>
          <MenuDivider />
        </Menu>
                </View>
            <View style={{width:'48%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Cédula"
              value={values.Cedula}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text => setFieldValue("Cedula",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Cedula")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Cedula && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Cedula}</Text>} */}

            </View>
            
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>
            <View style={{width:'96%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Celular"
              value={values.Celular}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text => setFieldValue("Celular",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Celular")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Celular && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Celular}</Text>} */}

            </View>
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>
            <View style={{width:'96%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Correo Electrónico"
              value={values.Correo}
              mode='outlined'
              keyboardType="numeric"
              onChangeText={text => setFieldValue("Correo",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Correo")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Correo && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Correo}</Text>} */}

            </View>
            </View>

        
            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>

           <View style={{justifyContent:'space-around',flexDirection:'row',width:'96%'}}>
            
              <Button disabled={values.Nombre !== '' 
              &&values.Apellido !== '' 
              && values.Documento !== '' 
              && values.Cedula !== '' 
              && values.Celular !== '' 
              && values.Correo !== '' ?false:true}
              
              onPress={handleSubmit}
              style={values.Nombre !== '' 
              &&values.Apellido !== '' 
              && values.Documento !== '' 
              && values.Cedula !== '' 
              && values.Celular !== '' 
              && values.Correo !== '' ?defaultStyle.buttonactive:defaultStyle.btn}>
                 <Text  style={{color:'#ffff'}}>Continue</Text>
                 </Button>
            </View>
            </View>
        
        </Form>
   
        )}}
   </Formik> 
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


const mapStateToProps = ({balance,TvReducer}) => ({
    activeBalance:balance.activeBalance,
    allBalance :balance.balance,
    activeProvider : TvReducer.activeProvider,
    initialValues: TvReducer.initialValues,
    activeType : TvReducer.activeType,
    firstStepData : TvReducer.wizard?.firstStepData

      
  })
  
  
export default connect(mapStateToProps,null)(RuntInputs);