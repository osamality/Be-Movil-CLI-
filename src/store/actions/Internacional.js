export const CLEAR_CACHING = "CLEAR_CACHING"
export const SET_ACTIVE_PROVIDER_INTERNACIONAL ="SET_ACTIVE_PROVIDER_INTERNACIONAL"
export const SET_INIT_VALUES ="SET_INIT_VALUES"
export const SET_ACTIVE_TYPE_INTERNACIONAL = "SET_ACTIVE_TYPE_INTERNACIONAL"

export const clearCash = ()=>dispatch=>{
    dispatch({
        type : CLEAR_CACHING
    })
}

export const setActiveProvider = (activeProvider)=>{
    return dispatch =>{
      dispatch ({type:SET_ACTIVE_PROVIDER_INTERNACIONAL,payload:activeProvider})
    }
}

export const setActiveType = (activeType)=>dispatch=>{
    dispatch({
        type : SET_ACTIVE_TYPE_INTERNACIONAL,
        payload : activeType
    })
}

export const resetInintalValues= ()=>dispatch=>{
    dispatch({
        type : SET_INIT_VALUES,
        payload : {
            Celular :'',
            Valor : ''
    
        }
    })
}