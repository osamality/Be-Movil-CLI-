import { SET_BALANCE, SET_ACTIVE_BALANCE } from '../actions/balance';

const initialState = {
  balance:{},
  activeBalance:null
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.balnace,
      };
      case SET_ACTIVE_BALANCE:
        return {
          ...state,
          activeBalance: action.activeBalance,
        };
    default:
      return state;
  }
};
