import  { SET_ACTIVE_PROVIDER_TO_DIGITALES, SET_INIT_VALUES, CLEAN_CASHING ,SET_ACTIVE_PACKAGE } from '../actions/digitales'

const initialState = {
   
    activeType :"Digitales",
    activeProvider:{},
    activePackage:{},
    initialValues :{
        correo :'',
    }
 
};

export default (state = initialState, action) => {
  switch (action.type) {
   

    case SET_ACTIVE_PROVIDER_TO_DIGITALES:
     return {
        ...state,
        activeProvider:action.payload
    }
    case SET_INIT_VALUES :{
        return {
            ...state,
            initialValues : action.payload
        }
    }

    case CLEAN_CASHING :{
        return {
            ...initialState
        }
    }
    case SET_ACTIVE_PACKAGE :{
        return {
            ...state,
            activePackage : action.payload

        }
    }
     
      
    default:
      return state;
  }
};
