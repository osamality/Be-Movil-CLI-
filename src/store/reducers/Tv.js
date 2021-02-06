import { CLEAR_CACHING, SET_ACTIVE_PROVIDER_TV, SET_INIT_VALUES_TV,SET_SECOND_STEP_DATA_TV,SET_THIRD_STEP_DATA_TV,
    SET_ACTIVE_TYPE_TV, SET_ACTIVE_STEP_TV,SET_FIRST_STEP_DATA_TV} from '../actions/Tv'
const initialState = {
    activeType :"Directv",
    activeProvider:{},
    initialValues :{
        Numero :'',
        email : ''

    },
    wizard :{
        activeStep : 0,
        firstStepData :{
            "Nombre":"",
            "Apellido":"",
            "Documento":"",
            "Cedula":"",
            "Celular":"",
            "Correo":""
        },
        secondStepData :{
            Departamento :"",
            Ciudad:"",
            Direccion :""
        },
        thirdStepData : {
            Cantidad:"",
            Valor :"",
            Total:"",
            Total_Venta : ""
        }
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
   
    case CLEAR_CACHING :{
        return{
            ...initialState
        }
    }
    case SET_ACTIVE_PROVIDER_TV :{
        return {
            ...state,
            activeProvider : action.payload
        }
    }
    case SET_INIT_VALUES_TV :{
        return {
            ...state,
            initialValues : action.payload

        }
    }
    case SET_ACTIVE_TYPE_TV :{
        return {
            ...state,
            activeType :action.payload
        }
    }
    case SET_ACTIVE_STEP_TV :{
        return{
            ...state,
            wizard : {
                ...state.wizard,
                activeStep : action.payload
            }

        }
    }
    case SET_FIRST_STEP_DATA_TV :{
        return {
            ...state,
            wizard : {
                ...state.wizard,
                firstStepData : action.payload
            }
        }
    }
    case SET_SECOND_STEP_DATA_TV :{
        return {
            ...state,
            wizard : {
                ...state.wizard,
                secondStepData : action.payload
            }
        }

    }
    case SET_THIRD_STEP_DATA_TV :{
        return {
            ...state,
            wizard : {
                ...state.wizard,
                thirdStepData : action.payload
            }
        }

    }
      
    default:
      return state;
  }
};
