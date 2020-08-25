import { SET_RECARGAS_TYPE, SET_ACTIVE_PACKAGE } from '../actions/recargas';

const initialState = {
    activeType:'Recargas',
    activePackage:{}
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECARGAS_TYPE:
      return {
        ...state,
        activeType: action.activeType,
      };
      case SET_ACTIVE_PACKAGE :
        return {
          ...state,
          activePackage:action.activePackage
        }
      
    default:
      return state;
  }
};
