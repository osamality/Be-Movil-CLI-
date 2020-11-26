export const SET_BET_COMPANIES_RENDER_TYPE ="SET_BET_COMPANIES_RENDER_TYPE"
export const SET_ACTIVE_PROVIDER_TO_BET_COMPOANIES="SET_ACTIVE_PROVIDER_TO_BET_COMPOANIES"

export const saveActiveRecargas = (activeType) => {
    return dispatch => {
      dispatch({ type: SET_BET_COMPANIES_RENDER_TYPE, payload:activeType });
    };
  };

  export const setActiveProvider = (activeProvider)=>{
    return dispatch =>{
      dispatch ({type:SET_ACTIVE_PROVIDER_TO_BET_COMPOANIES,payload:activeProvider})
    }
  }
  