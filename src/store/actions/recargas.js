
export const SET_RECARGAS_TYPE = 'SET_RECARGAS_TYPE';



export const saveActiveRecargas = (activeType) => {
  return dispatch => {
    dispatch({ type: SET_RECARGAS_TYPE, activeType:activeType });
  };
};