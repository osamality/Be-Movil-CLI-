import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,FlatList } from 'react-native';
import {connect} from 'react-redux';
import beImg from '../../assets/Images/be.png'
import beactiveImg from '../../assets/Images/bactive2.png'
import {Form,Button } from 'native-base';
import {TextInput} from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/FontAwesome5';
import arrowImage from '../../assets/Images/arrowBottm3.png';
import notactiveImage from '../../assets/Images/notactive.png';
import {isEmpty,get} from 'lodash';
import * as DigitalActions from '../../store/actions/digitales';
import { useDispatch } from 'react-redux';
import Modal, { SlideAnimation, ModalContent, ModalButton } from 'react-native-modals';
import {packageData} from './packageData'
const activeImageInputs =(initialValues,activeProvider,type)=>{

    if (isEmpty(activeProvider)){
        return <Image source={notactiveImage}/>

    }
    else{
       
            if(initialValues.correo == ''){
                return <Image source={beImg}/>
            }
              else {
                return <Image source={beactiveImg}/> 
          
            }
    
    }
    
  }


  const renderInputs = (initialValues,activeProvider, refRBSheet)=>{

    const dispatch=useDispatch()

    return(
      
    <Form style={{marginTop:1,marginTop:10}}>
    <TextInput style={defaultStyle.InputText1Style}
      label="Correo Electrónico"
      value={initialValues.correo}
      mode='outlined'
      onChangeText={text => dispatch(DigitalActions.setIninalValues({...initialValues,"correo":text}))}
      underlineColor='transparent'
      underlineColorAndroid={'rgba(0,0,0,0)'}
      text='white'
      direction='rtl'
      theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
      editable={activeProvider.name?true:false}
    />
   
   <View style={{justifyContent:'space-around',flexDirection:'row'}}>
    
      <Button disabled={initialValues.correo!==''?false:true}
      onPress={() => refRBSheet.current.open()}
      style={ initialValues.correo!=='' && activeProvider.name?defaultStyle.buttonactive:defaultStyle.btn}>
         <Text  style={{color:'#ffff'}}>Recargas</Text>
         </Button>
    </View>

</Form>
  )
  
}
const renderPackage = (activePackage,navigation,activeProvider) =>{
  const dispatch=useDispatch()

  const [toggleModel,setToggleModal]=useState(false)
  const handlePress = async (item)=>{
    const action= DigitalActions.saveActivePackage(item);
    try {
      await dispatch(action)
      setToggleModal(false)

    }
    catch {
      console.log("ERROR")

    }
    // dispatch(DigitalActions.saveActivePackage(item))
    // setToggleModal(false)
  }
    const data =get(packageData,activeProvider?.name,[])


  return(
      <>
       <Modal
   
   width={350}
   height={300}
  visible={toggleModel}
  modalAnimation={new SlideAnimation({
    slideFrom: 'top',
  })}
  modalTitle={
  
  <View style={defaultStyle.titleModal}>
      <Text style={defaultStyle.title}>Choose your Package</Text>
      <Text style={defaultStyle.closeBtn} onPress={()=>setToggleModal(false)}>
          X
      </Text>

  </View>
 
 }
>
   

  <ModalContent >
  {!isEmpty(data)? <View>
       {
         data.map((item,key)=>{
           return (
             <View style={{borderBottomWidth :1,borderBottomColor:'rgb(235,235,235)',
             padding:8,
              flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:'center'}}
              key={key}
              >
             <View style={styles.priceContiner}>
               <Text style={styles.itemPrice}>
                 {item.price}
               </Text>
               <Text style={styles.itemPrice}>
               Incentivo: $0
               </Text>
            </View>
            <View>
           <Text style={styles.packageName}>{item.name} {item.price}</Text>
            </View>
            <Button
            onPress={()=>handlePress(item)}
              style={styles.buttonactive}>
           <Text  style={{color:'#ffff'}}>Seleccionar</Text>
           </Button>
            </View>
           )
         })
       }
   </View>
   :<View>
     <Text>
       no
     </Text>
   </View>}
  </ModalContent>

</Modal>
        
   {isEmpty(activePackage)? <TouchableOpacity
    style={activeProvider.name? styles.packages:styles.notactivePackages} 
    onPress={()=>setToggleModal(true)}
    disabled={activeProvider.name?false:true}
   >
       <View style={styles.DownloadIcon}>
           <Image source={arrowImage} style={styles.Image}/>
       </View>
   <Text style={{color:'#ffff'}}>
   Selecciona tu Paquete
   </Text>
   <Icon name="chevron-down" size={15} color="#ffff" />
   </TouchableOpacity>

  

        :<TouchableOpacity
        style={styles.PackageData} 
        onPress={()=>setToggleModal(true)}
        disabled={activeProvider.name?false:true}
       >
           <View style={styles.contentBox}>
               <Text style={{color:'black',fontWeight:'bold'}}>
                 ${activePackage?.price}
               </Text>
               <Text style={{color:'black'}}>
               Incentivo: $0
               </Text>
            </View>
       <Text style={{color:'#ffff',fontSize:15}}>
        {activePackage?.name} {activePackage?.price}
       </Text>
       <Icon name="chevron-down" size={15} color="#ffff" />
       </TouchableOpacity>
      
    }
    </>
   
  )}


const RecargasChange = ({initialValues,activeProvider,navigation,activePackage,allBalance}) =>  {
    const refRBSheet = useRef();
    const [index,setindex]=useState(0)

  return (
      <>
      <View style={styles.paymentContent}>
            {activeImageInputs(initialValues,activeProvider,"bet_companies_Recargas")}
           <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
           Información de tu Cuenta :    
            </Text>
        </View>
         <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>
         </View>
         {renderPackage(activePackage,navigation,activeProvider)}
         
         {renderInputs(initialValues,activeProvider,refRBSheet)}
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
    <Text>Correo:</Text>
    </View>
    <View style={defaultStyle.textTable1}>
    <Text >{initialValues.correo}</Text>
    </View>
    </View>
    <View style={defaultStyle.container}>
    <View 
    style={defaultStyle.textTable}>
    <Text>Valor:</Text>
    </View>
    <View style={defaultStyle.textTable1}>
    <Text >{activePackage.price}</Text>
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
    marginTop:20,
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


  },
  buttonactive:{
    backgroundColor:'red',
    borderRadius:4,
    marginTop:12,
    width: 90,
    justifyContent:'center',
    alignItems:'center',
    height:35,
    marginLeft:5
  },
  priceContiner:{
    shadowColor: 'black',
    shadowOpacity: 5.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius:8,
    padding:8,  
    justifyContent:'center',
    alignItems:'center',   
    marginRight:15
  },
  contentBox:{
    shadowColor: 'black',
    shadowOpacity: 5.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius:8,
    padding:5,  
    justifyContent:'center',
    alignItems:'center',

  },
  itemPrice:{
    color: 'rgb(103 ,103 ,103)',
 
  },
  packageName:{
    color:'black',
    marginHorizontal :25,
    fontSize:15

  },
  PackageData:{
      flexDirection:'row',
      width:'90%',
      justifyContent:'space-around',
      alignItems:'center',
      borderRadius:5,
      padding:15,
      backgroundColor:'rgb(235 ,6 ,42)'
  },
  

});

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
  
    },
    titleModal:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        height:50
    },
    closeBtn:{
        color:'#ffff',
        textAlign:'left',
        width:'8%',
        fontWeight:'bold',
        fontSize:16
        
    },
    title:{
        color:'#ffff',
        textAlign:'center',
        width:'92%',
        fontSize:15
    }
  
  })

const mapStateToProps = ({balance,betCompanies,recargas,digital}) => ({
    activeBalance:balance.activeBalance,
    allBalance :balance.balance,
    activeProvider : digital.activeProvider,
    initialValues : digital.initialValues,
    activePackage :digital.activePackage
      
  })
  
  
export default connect(mapStateToProps,null)(RecargasChange);







