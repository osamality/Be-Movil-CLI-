export const CLEAR_CACHING = "CLEAR_CACHING";
export const SET_ACTIVE_PROVIDER_TV = "SET_ACTIVE_PROVIDER_TV";
export const SET_INIT_VALUES_TV = "SET_INIT_VALUES_TV";
export const SET_ACTIVE_TYPE_TV = "SET_ACTIVE_TYPE_TV";
export const SET_ACTIVE_STEP_TV = "SET_ACTIVE_STEP_TV"
export const SET_FIRST_STEP_DATA_TV ="SET_FIRST_STEP_DATA_TV"

export const clearCash = ()=>dispatch=>{
    dispatch({
        type : CLEAR_CACHING
    })
}

export const setActiveProvider = (activeProvider)=>{
    return dispatch =>{
      dispatch ({type:SET_ACTIVE_PROVIDER_TV,payload:activeProvider})
    }
}

export const setActiveType = (activeType)=>dispatch=>{
    dispatch({
        type : SET_ACTIVE_TYPE_TV,
        payload : activeType
    })
}
export const setInitialValues =(data)=>dispatch=>{
    dispatch({
        type : SET_INIT_VALUES_TV,
        payload : data
    })
}

export const resetInintalValues= ()=>dispatch=>{
    dispatch({
        type : SET_INIT_VALUES_TV,
        payload : {
            Numero :'',
            email : ''
    
        },
    })
}

export const setActiveStepTv = (stepNumber)=>dispatch=>{
    dispatch({
        type : SET_ACTIVE_STEP_TV,
        payload : stepNumber
    })
}

export const setFirstStepData = (data)=>dispatch=>{
    dispatch({
        type : SET_FIRST_STEP_DATA_TV,
        payload : data
    })
}