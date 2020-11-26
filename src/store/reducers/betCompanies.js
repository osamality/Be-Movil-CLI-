import  {SET_BET_COMPANIES_RENDER_TYPE, SET_ACTIVE_PROVIDER_TO_BET_COMPOANIES} from '../actions/betCompanies'

const initialState = {
    activeType:'Recargas',
    activePackage:{},
    activeProvider:{}
 
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
     
      
    default:
      return state;
  }
};
