import { SET_RECARGAS_TYPE } from '../actions/recargas';

const initialState = {
    activeType:'Recargas'
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECARGAS_TYPE:
      return {
        ...state,
        activeType: action.activeType,
      };
      
    default:
      return state;
  }
};
