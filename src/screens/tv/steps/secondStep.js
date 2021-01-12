import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, Platform ,SafeAreaView} from 'react-native';
import {Form,Button } from 'native-base';
import {TextInput,} from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch } from 'react-redux';
import * as TvActions from '../../../store/actions/Tv';
import {connect} from 'react-redux';
import { Formik, } from 'formik'
import * as Yup from 'yup'
import {city,state} from '../../../constants/staticData';
import {get} from 'lodash'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { ScrollView } from 'react-native-gesture-handler';

const SecondStep = ({activeProvider,secondStepData}) =>  {
    const [cities,setCites]=useState([])
    const [states,setStates]=useState([])
    useEffect(() => {
        const fetchCity=()=>{
    
          const arr = []
          city.map((d,v)=>{
            arr.push({
              "value":d.fields.name,
              "label":d.fields.name
            })
          })
          setCites(arr)
        }
        const fetchState= ()=>{
    
          const arr = []
          state.map((d,v)=>{
            arr.push({
              "value":d.fields.state,
              "label":d.fields.state
            })
          })
          setStates(arr)
    
        }
        fetchCity()
        fetchState()
      }, []);
    const dispatch = useDispatch()

    const refRBSheet = useRef(null)
    const refRBSheetCity = useRef(null)


    

    
      const onFormSubmit = (values)=>{
          dispatch(TvActions.setActiveStepTv(2))
          dispatch(TvActions.setSecondStepDataTv(values))
          
      }


    const  hideMenu = () => {
      refRBSheet.current.hide();
      };
     
     const showMenu = () => {
      refRBSheet.current.show();
      };

      const onchangeState = (stateData)=>{
        const AllStates = state.filter(d=>{
            return d.fields.state == stateData
            
          })
          const pk = get(AllStates,"pk",'ss')
          const AllCities = city.filter(d=>{
            return d.fields.state == AllStates[0].pk
          })
          let Final=[]
          AllCities.map(d=>{
           Final.push({
             "value":d.fields.name,
             "label":d.fields.name
           }) 
          })
          setCites(Final)
          refRBSheet.current.hide()
      }

     

  return (
    <Formik
    initialValues={{...secondStepData}}
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
                <View style={{width:'95%'}}>
                <Menu
                style={{maxHeight:500,overflow:"scroll"}}
          ref={refRBSheet}
        //   button={<Text onPress={this.showMenu}>Show menu</Text>}
        button = {
            <TextInput  style={defaultStyle.InputText1Style}
            label="Departamento"
            value={values.Departamento}
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
       
          />
        }
        ><ScrollView>
            {states.map(item=>(
                
                <MenuItem ellipsizeMode ="middle"
                onPress={()=>{setFieldValue("Departamento",item.label),
                onchangeState(item.label),
                setFieldValue("Ciudad","")}
            }>{item.label}</MenuItem>
                ))}
                </ScrollView>
        </Menu>
        </View>
            
        </View>

        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>
                <View style={{width:'95%'}}>
                <Menu
                style={{maxHeight:500,overflow:"scroll"}}
          ref={refRBSheetCity}
        //   button={<Text onPress={this.showMenu}>Show menu</Text>}
        button = {
            <TextInput  style={defaultStyle.InputText1Style}
            label="Ciudad"
            value={values.Ciudad}
            mode='outlined'
            // onChangeText={text => setFieldValue("Apellido",text)}
            underlineColor='transparent'
            underlineColorAndroid={'rgba(0,0,0,0)'}
            text='white'
            direction='rtl'
            theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
            editable={false}
            onTouchStart = {()=>refRBSheetCity.current.show()}
            
            right={<TextInput.Icon
            style={{marginTop:10}}
            color="grey"
            onPress = {()=>refRBSheetCity.current.show()}
                name="chevron-down"
            />}
       
          />
        }
        ><ScrollView>
            {cities.map(item=>(
                
                <MenuItem ellipsizeMode ="middle"
                onPress={()=>{setFieldValue("Ciudad",item.label),refRBSheetCity.current.hide()}}>{item.label}</MenuItem>
                ))}
                </ScrollView>
        </Menu>
        </View>
            
        </View>

        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>
            <View style={{width:'95%'}}>
            <TextInput style={defaultStyle.InputText1Style}
              label="Dirección"
              value={values.Direccion}
              mode='outlined'
            //   keyboardType="numeric"
              onChangeText={text => setFieldValue("Direccion",text)}
              underlineColor='transparent'
              underlineColorAndroid={'rgba(0,0,0,0)'}
              text='white'
              direction='rtl'
              theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
              editable={activeProvider.name?true:false}
              onBlur={handleBlur("Direccion")}
            //   style={{marginBottom:2}}
            />
            {/* {touched.Correo && <Text style={{ color: 'red',textAlign:'center' }}>{errors.Correo}</Text>} */}

            </View>
            </View>

       
        
            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%',}}>

           <View style={{justifyContent:'space-around',flexDirection:'row',width:'96%'}}>
            
              <Button disabled={values.Direccion !== '' 
              &&values.Ciudad !== '' 
              && values.Documento !== '' 
              && values.Departamento !== '' 
             ?false:true}
              
              onPress={handleSubmit}
              style={values.Direccion !== '' 
              &&values.Ciudad !== '' 
              && values.Departamento !== '' 
               ?defaultStyle.buttonactive:defaultStyle.btn}>
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
    secondStepData : TvReducer.wizard?.secondStepData

      
  })
  
  
export default connect(mapStateToProps,null)(SecondStep);