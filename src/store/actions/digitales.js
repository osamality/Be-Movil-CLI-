export const SET_ACTIVE_PROVIDER_TO_DIGITALES = "SET_ACTIVE_PROVIDER_TO_DIGITALES";
export const SET_INIT_VALUES = "SET_INIT_VALUES";
export const CLEAN_CASHING = "CLEAN_CASHING";
export const SET_ACTIVE_PACKAGE ="SET_ACTIVE_PACKAGE"


export const setActiveProvider = (activeProvider)=>{
    return dispatch =>{
      dispatch ({type:SET_ACTIVE_PROVIDER_TO_DIGITALES,payload:activeProvider})
    }
  }

  export const clearCash = ()=>dispatch=>{
    dispatch({
        type : CLEAN_CASHING
    })
}

export const setIninalValues = (data)=>dispatch=>{
    dispatch({
        type:SET_INIT_VALUES,
        payload :data
    })
}

export const saveActivePackage = (activePackage)=>{
  return dispatch =>{
    dispatch({
      type :SET_ACTIVE_PACKAGE,
      payload:activePackage
    });
  }
}
