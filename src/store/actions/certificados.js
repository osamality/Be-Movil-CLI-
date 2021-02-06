export const CLEAR_CACHING = "CLEAR_CACHING"
export const SET_ACTIVE_PROVIDER_CERTIFICADOS ="SET_ACTIVE_PROVIDER_CERTIFICADOS"
export const SET_INIT_VALUES ="SET_INIT_VALUES"
export const SET_TITLE ="SET_TITLE"

export const setActiveProvider = (activeProvider)=>{
    return dispatch =>{
      dispatch ({type:SET_ACTIVE_PROVIDER_CERTIFICADOS,payload:activeProvider})
    }
}

export const setTitle = (title)=>{
    return dispatch =>{
      dispatch ({type:SET_TITLE,payload:title})
    }
}

export const clearCash = ()=>dispatch=>{
    dispatch({
        type : CLEAR_CACHING
    })
}

export const setInitialValues =(data)=>dispatch=>{
    dispatch({
        type : SET_INIT_VALUES,
        payload : data
    })
}

export const resetInintalValues = ()=>dispatch=>{
    dispatch({
        type :SET_INIT_VALUES,
        payload : {
            Ciudad :'',
            Matricula : ''
    
        },
    })
   
}