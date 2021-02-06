import { CLEAR_CACHING, SET_ACTIVE_PROVIDER_INTERNACIONAL, SET_INIT_VALUES,SET_ACTIVE_TYPE_INTERNACIONAL} from '../actions/Internacional'
const initialState = {
    activeType :"Venezuela",
    activeProvider:{},
    initialValues :{
        Celular :'',
        Valor : ''

    },
};

export default (state = initialState, action) => {
  switch (action.type) {
   
    case CLEAR_CACHING :{
        return{
            ...initialState
        }
    }
    case SET_ACTIVE_PROVIDER_INTERNACIONAL :{
        return {
            ...state,
            activeProvider : action.payload
        }
    }
    case SET_INIT_VALUES :{
        return {
            ...state,
            initialValues : action.payload

        }
    }
    case SET_ACTIVE_TYPE_INTERNACIONAL :{
        return {
            ...state,
            activeType :action.payload
        }
    }
      
    default:
      return state;
  }
};
