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

const activeImageInputs =(initialValues,activeProvider,type)=>{

    if (isEmpty(activeProvider)){
        return <Image source={notactiveImage}/>

    }
    else{
        if(type=="movil"){

            if(initialValues.phone == '' || initialValues.amount == ''){
                return <Image source={beImg}/>
              }
              else {
                return <Image source={beactiveImg}/> 
          
              }
        }
        else {
            if(initialValues.phone == '' || initialValues.amount == ''){
                return <Image source={beImg}/>
              }
              else {
                return <Image source={beactiveImg}/> 
          
              }

        }

    }
    
  }


  const renderInputs = (initialValues,setInitialVales,activeProvider, refRBSheet)=>{


    return(
      
    <Form style={{marginTop:5}}>
    <TextInput style={defaultStyle.InputText1Style}
      label="Phone number"
      value={initialValues.phone}
      mode='outlined'
      keyboardType="numeric"
      onChangeText={text => setInitialVales({...initialValues,phone:text})}
      underlineColor='transparent'
      underlineColorAndroid={'rgba(0,0,0,0)'}
      text='white'
      direction='rtl'
      theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
      editable={activeProvider.name?true:false}
    />

      <TextInput
      label="Amount"
      value={initialValues.amount}
      style={defaultStyle.InputText1Style}
      mode='outlined'
      keyboardType="numeric"
      onChangeText={text => setInitialVales({...initialValues,amount:text})}
      underlineColor='transparent'
      underlineColorAndroid={'rgba(0,0,0,0)'}
      text='white'
      direction='rtl'
      theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
      editable={activeProvider.name?true:false}


    />
   
   <View style={{justifyContent:'space-around',flexDirection:'row'}}>
    
      <Button disabled={initialValues.phone!=='' && initialValues.amount!==''?false:true}
      onPress={() => refRBSheet.current.open()}
      style={initialValues.phone!=='' && initialValues.amount!=='' && activeProvider.name?defaultStyle.buttonactive:defaultStyle.btn}>
         <Text  style={{color:'#ffff'}}>Recargas</Text>
         </Button>
    </View>

</Form>
  )
  
}

const renderInputsPackage =(InitialValesPackage,setInitialValesPackage,activeProvider, refRBSheet)=>{
    return(
        <Form style={{marginTop:5}}>
        <TextInput style={defaultStyle.InputText1Style}
          label="Phone number"
          value={InitialValesPackage.phone}
          mode='outlined'
          keyboardType="numeric"
          onChangeText={text => setInitialValesPackage({...InitialValesPackage,phone:text})}
          underlineColor='transparent'
          underlineColorAndroid={'rgba(0,0,0,0)'}
          text='white'
          direction='rtl'
          theme={{ colors: { primary: 'gray',underlineColor:'transparent',background : '#003489'}}}
          editable={activeProvider.name?true:false}
        />
    
       <View style={{justifyContent:'space-around',flexDirection:'row'}}>
        
          <Button disabled={InitialValesPackage.phone!==''?false:true}
          onPress={() => refRBSheet.current.open()}
          style={InitialValesPackage.phone!==''  && activeProvider.name?defaultStyle.buttonactive:defaultStyle.btn}>
             <Text  style={{color:'#ffff'}}>Recargas</Text>
             </Button>
        </View>
    
    </Form>
      )
}

const renderPackage = (activePackage,navigation,activeProvider) =>{

  if(isEmpty(activePackage)){
return(
  <TouchableOpacity
  style={activeProvider.name? styles.packages:styles.notactivePackages} 
  onPress={()=>navigation.navigate('Package')}
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
)
}
  else{
    return(
      <View>
        <Text>{activePackage.name}</Text>
        <Text>{activePackage.price}</Text>
        <Text>{activePackage.description}</Text>

      </View>
    )

  }
}


const handelType =(RecargasActiveType, 
    initialValues, 
    setInitialVales,
    activeProvider,
    refRBSheet,
    InitialValesPackage,
    setInitialValesPackage,
    navigation,
    activePackage
    )=>{
    const [index,setindex]=useState(0)

    if (RecargasActiveType=="Recargas"){
        return (
            <>
        <View style={styles.paymentContent}>
            {activeImageInputs(initialValues,activeProvider,"movil")}
           <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
               Escoje tu Operador:   
            </Text>
           </View>
         <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>
         </View>
         {renderInputs(initialValues,setInitialVales,activeProvider,refRBSheet)}
         <View>
    <RBSheet
    ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={false}
    height={500}
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
    Estas apunto de adquirir el paquete:
    </Text> 
    <Text style={{color:'rgb(235,6,42)'}}>
    Todo Incluido 30 Dias 
    
    </Text>
    <Text  style={{fontWeight:'bold',fontSize:25}}  >
    Realizar compra desde:       
    </Text>
    <View style={defaultStyle.container}>
    <View 
    style={defaultStyle.textTable}>
    <Text>Operador:</Text>
    </View>
    <View style={defaultStyle.textTable1}>
    <Text >{activeProvider.name}</Text>
    </View>
    </View>
    <View style={defaultStyle.container}>
    <View 
    style={defaultStyle.textTable}>
    <Text>Linea:</Text>
    </View>
    <View style={defaultStyle.textTable1}>
    <Text >{initialValues.phone}</Text>
    </View>
    </View>
    <View style={defaultStyle.container}>
    <View 
    style={defaultStyle.textTable}>
    <Text>Valor:</Text>
    </View>
    <View style={defaultStyle.textTable1}>
    <Text >{initialValues.amount}</Text>
    </View>
    </View>
    
    
    <View style={{justifyContent:'space-around',flexDirection:'row'}}>
    <Button 
    style={index==0?defaultStyle.button1:defaultStyle.button1active}
    onPress={()=>setindex(1)}
    >
    <Text>Mi Ahorro</Text>
    </Button>
    <Button
    onPress={()=>setindex(0)}
    style={index==1?defaultStyle.button1:defaultStyle.button1active}>
    <Text >Mi Caja</Text>
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
    <View style={{marginTop:5}}>

    </View>
    </View>
    </ScrollView>
    </RBSheet>
    
    </View>

       
         </>
        )
    }
    else {
        return (
           <>
              <View style={styles.paymentContent}>
            {activeImageInputs(initialValues,activeProvider,"package")}
           <Text style={{...styles.paymentText,marginRight:4,fontWeight:'bold'}}>
               Escoje tu Operador:   
            </Text>
           </View>
           <View style={{borderBottomWidth:1,borderBottomColor:'black',width:'90%', marginBottom:15,marginTop:10 }}>
           </View>
           {renderPackage(activePackage,navigation,activeProvider)}
          
           {renderInputsPackage(InitialValesPackage,setInitialValesPackage,activeProvider,refRBSheet)}



           </>
            
        )
    }
}
const RecargasChange = ({RecargasActiveType,activeProvider,navigation,activePackage}) =>  {
    const refRBSheet = useRef();

    const [initialValues,setInitialVales]=useState({
        phone:'',
        amount:''
      })

      const [initialValuesPackage,setInitialValesPackage]=useState({
        phone:'',
      })

   
  return (
      <>
     {handelType(RecargasActiveType,
        initialValues,
        setInitialVales,
        activeProvider,
        refRBSheet,
        initialValuesPackage,
        setInitialValesPackage,
        navigation,
        activePackage

        )}
     </>
  );
}

const styles = StyleSheet.create({
  
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
        width:345,
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
      width: '80%',
      justifyContent:'center',
      alignItems:'center'
    },
    buttonactive:{
      backgroundColor:'red',
  
      borderRadius:5,
      width: '80%',
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
      borderColor:'black',
      borderRadius:3,
      width: '30%',
      justifyContent:'center',
      alignItems:'center',
      margin:20
    },
    button1active:{
      backgroundColor:'rgb(44,209,158)',
      borderWidth:1,
      borderColor:'rgb(44,209,158)',
      borderRadius:3,
      width: '30%',
      justifyContent:'center',
      alignItems:'center',
      margin:20
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

const mapStateToProps = ({balance,product,recargas}) => ({
    activeBalance:balance.activeBalance,
    activeProvider : product.activeProvider,
    RecargasActiveType : recargas.activeType,
    activePackage :recargas.activePackage
      
  })
  
  
export default connect(mapStateToProps,null)(RecargasChange);







