// import React,{useState,useEffect} from 'react'
// import { View, StyleSheet,Text, TouchableOpacity , } from 'react-native';
// // import {data} from './TestData'
// import * as balanceActions from '../../../store/actions/balance';

// import { useDispatch } from 'react-redux';
// import {connect} from 'react-redux';
// import {map} from 'lodash'
// import {isEmpty} from 'lodash'

// const renderText = (data)=>{
//     const [index,setIndex]=useState("SS");
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const setDefaultBalnce= async()=>{
            
//             const action = balanceActions.saveActiveBalance(data.SS)
//             try{
//                 await dispatch(action)
//             }
//             catch{
//                 console.log("Falied Balnace")
//             }
        
//         }
//         setDefaultBalnce();
            
//     }, []);

//     const setStatus = async(index,balance)=>{
//         const action = balanceActions.saveActiveBalance(balance)
//         setIndex(index);
//         try{
//             await dispatch(action)
//         }
//         catch{
//             console.log("Falied Balnace")
//         }
//     }

//     return map(data,(d,v)=>{
//         console.log("testhee",d,v)
//         return (
//             <TouchableOpacity  key={v} 
//              style={index==v? styles.contentActive:styles.content}
//              onPress={()=>setStatus(v,d)}

//             >
//                 <Text  style={styles.Text}> {v=="SS"? "recargas ": v=="ST"? "Mi Caja" :"Mi Ahorro"} </Text>
//                 <Text  style={styles.Text}> {v==index? 'active':d} </Text>
//             </TouchableOpacity >

//         )
//     })

// }
// function CustomTaps({balance}) {
//     return (
//         <View style={styles.Contentcontainer}>
//             {!isEmpty(balance)&&renderText(balance)}
//         </View>
//     )
// }
// const styles = StyleSheet.create({

//     Contentcontainer:{
//         flex:1,
//         flexDirection:'row',
//         shadowColor: 'black',
//         shadowOpacity: 5.26,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 8,
//         elevation: 5,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         width: '90%',
//         borderBottomLeftRadius: 1,
//         borderBottomRightRadius: 1,
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         textAlign:'center',
       

//     },
//     content:{
//         flex:1,
//         flexDirection:'column',
//         paddingVertical:8,
//     },
//     contentActive:{
//         flex:1,
//         flexDirection:'column',
//         paddingVertical:8,
//         borderBottomWidth :2,
//         borderBottomColor: 'red'   
//         // backgroundColor:'red',

//     },
//     Text:{
//        fontSize:10,
//        textAlign:'center'

//     },

//   });

// const mapStateToProps = ({balance}) => ({
//     balance:balance.balance
      
//   })

// export default connect(mapStateToProps,null) (CustomTaps)
