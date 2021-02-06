export const CLEAR_CACHING_FACTOURAS = "CLEAR_CACHING_FACTOURAS"
export const SET_ACTIVE_PROVIDER_FACTOURAS ="SET_ACTIVE_PROVIDER_FACTOURAS"
export const SET_INIT_VALUES_NORAML ="SET_INIT_VALUES_NORAML"
export const SET_INITUAL_VALUES_PEGO = "SET_INITUAL_VALUES_PEGO"

export const setActiveProvider = (activeProvider)=>{
    return dispatch =>{
      dispatch ({type:SET_ACTIVE_PROVIDER_FACTOURAS,payload:activeProvider})
    }
}


export const clearCash = ()=>dispatch=>{
    dispatch({
        type : CLEAR_CACHING_FACTOURAS
    })
}

export const setInitialValues =(data)=>dispatch=>{
    dispatch({
        type : SET_INIT_VALUES_NORAML,
        payload : data
    })
}
export const setInintalValuesPego = (data)=>dispatch=>{
    dispatch({
        type : SET_INITUAL_VALUES_PEGO,
        payload : data
    })
}

export const resetInintalValues = ()=>dispatch=>{
    dispatch({
        type :SET_INIT_VALUES_NORAML,
        payload : {
            numero : '',
            valor : '',
            correo :''
        }
    })
   
}