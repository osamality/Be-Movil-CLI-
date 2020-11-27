import  {SET_BET_COMPANIES_RENDER_TYPE, SET_ACTIVE_PROVIDER_TO_BET_COMPOANIES,SET_INIT_VALUES,CLEAN_CASHING} from '../actions/betCompanies'

const initialState = {
    activeType:'bet_companies_Recargas',
    activeProvider:{},
    initialValues :{
        numeroDocumento :'',
        Monto:''
    }
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BET_COMPANIES_RENDER_TYPE:
      return {
        ...state,
        activeType: action.payload,
      };

    case SET_ACTIVE_PROVIDER_TO_BET_COMPOANIES:
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
     
      
    default:
      return state;
  }
};
