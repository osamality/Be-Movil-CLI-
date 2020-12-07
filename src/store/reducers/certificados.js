import { CLEAR_CACHING, SET_ACTIVE_PROVIDER_CERTIFICADOS, SET_INIT_VALUES, SET_TITLE} from '../actions/certificados'
const initialState = {
    activeType :"certificados",
    activeProvider:{},
    title:"Certificados",
    initialValues :{
        Ciudad :'',
        Matricula : ''

    },
};

export default (state = initialState, action) => {
  switch (action.type) {
   
    case CLEAR_CACHING :{
        return{
            ...initialState
        }
    }
    case SET_ACTIVE_PROVIDER_CERTIFICADOS :{
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
    case SET_TITLE : {
        return {
            ...state,
            title : action.payload
        }
    }
      
    default:
      return state;
  }
};
