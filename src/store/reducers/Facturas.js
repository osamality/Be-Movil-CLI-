import {SET_ACTIVE_PROVIDER_FACTOURAS,CLEAR_CACHING_FACTOURAS, SET_INIT_VALUES_NORAML,SET_INITUAL_VALUES_PEGO} from "../actions/Facturas"
const initialState = {
   
    activeType :"Facturas",
    activeProvider:{},
    activePackage:{},
    initialValues :{
        numero : '',
        valor : '',
        correo :''
    },
    initialValuesPego:{
        Servicio:'',
        Referencia : '',
        Valor:'',
        Celular:'',
        Correo :''
    }
 
};

export default (state = initialState, action) => {
  switch (action.type) {
      case SET_INITUAL_VALUES_PEGO :{
          return { 
              ...state,
              initialValuesPego : action.payload
          }
      }
   case SET_ACTIVE_PROVIDER_FACTOURAS :{
       return{
           ...state,
           activeProvider : action.payload
       }
   }
   case CLEAR_CACHING_FACTOURAS :{
    return {
        ...initialState
    }
}
case SET_INIT_VALUES_NORAML :{
    return {
        ...state,
        initialValues : action.payload

    }
}

      
    default:
      return state;
  }
};
