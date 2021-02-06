
export const SET_BALANCE = 'SET_BALANCE';
export const SET_ACTIVE_BALANCE = 'SET_ACTIVE_BALANCE'

export const saveBalance = (balnace,) => {
  return dispatch => {
    dispatch({ type: SET_BALANCE, balnace:balnace });
  };
};

export const saveActiveBalance = (activeBalance) => {
  return dispatch => {
    dispatch({ type: SET_ACTIVE_BALANCE, activeBalance:activeBalance });
  };
};