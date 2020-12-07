import {SET_ACTIVE_TYPE_RENDER ,CHANGE_TITLE, CLEAR_CACHING, SET_ACTIVE_PROVIDER_BILLETRAS, SET_INIT_VALUES_DEPOSITO, SET_INIT_VALUES_RETIROS} from '../actions/billeteras'
const initialState = {
   
    activeType :"Deposito",
    title:"Billetera Digital",
    activeProvider:{},
    activePackage:{},
    initialValuesDeposito :{
        Linea :'',
        Monto_Recargar : ''

    },
    initialValuesRetiros:{
        Linea :'',
        Valor :'',
        Toquen : ''
    }
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
        return {
          ...state,
          title: action.payload,
        };

    case SET_ACTIVE_TYPE_RENDER :{
        return{
            ...state,
            activeType : action.payload
        }
    }
    case CLEAR_CACHING :{
        return{
            ...initialState
        }
    }
    case SET_ACTIVE_PROVIDER_BILLETRAS :{
        return {
            ...state,
            activeProvider : action.payload
        }
    }
    case SET_INIT_VALUES_DEPOSITO :{
        return {
            ...state,
            initialValuesDeposito : action.payload

        }
    }
    case SET_INIT_VALUES_RETIROS :{
        return {
            ...state,
            initialValuesRetiros : action.payload
        }
    }
      
    default:
      return state;
  }
};
