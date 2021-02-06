
export const SET_RECARGAS_TYPE = 'SET_RECARGAS_TYPE';

export const SET_ACTIVE_PACKAGE ='SET_ACTIVE_PACKAGE';

export const saveActiveRecargas = (activeType) => {
  return dispatch => {
    dispatch({ type: SET_RECARGAS_TYPE, activeType:activeType });
  };
};

export const saveActivePackage = (activePackage)=>{
  return dispatch =>{
    dispatch({
      type :SET_ACTIVE_PACKAGE,
      activePackage:activePackage
    });
  }
}