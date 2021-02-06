export const CHANGE_TITLE ="CHANGE_TITLE"
export const SET_ACTIVE_TYPE_RENDER ="SET_ACTIVE_TYPE_RENDER"
export const CLEAR_CACHING ="CLEAR_CACHING"
export const SET_ACTIVE_PROVIDER_BILLETRAS ="SET_ACTIVE_PROVIDER_BILLETRAS"
export const SET_INIT_VALUES_DEPOSITO ="SET_INIT_VALUES_DEPOSITO"
export const SET_INIT_VALUES_RETIROS ="SET_INIT_VALUES_RETIROS"

export const handleChangeTitle = (title)=>dispatch=>{
    dispatch({
        type:CHANGE_TITLE,
        payload : title
    })

}

export const setActiveTab = (tabName)=>dispatch=>{
    dispatch({
        type: SET_ACTIVE_TYPE_RENDER,
        payload : tabName
    })
}

export const clearCash = ()=>dispatch=>{
    dispatch({
        type :CLEAR_CACHING
    })
}

export const setActiveProvider = (activeProvider)=>{
    return dispatch =>{
      dispatch ({type:SET_ACTIVE_PROVIDER_BILLETRAS,payload:activeProvider})
    }
}

export const setInitialValuesDeposito = (data) => dispatch =>{
    dispatch({
        type:SET_INIT_VALUES_DEPOSITO,
        payload :data
    })
}

export const setinitialValuesRetiros = (data) => dispatch =>{

    dispatch({
        type:SET_INIT_VALUES_RETIROS,
        payload :data
    })

}

export const resetInintalValues = ()=>dispatch=>{
    dispatch({
        type :SET_INIT_VALUES_DEPOSITO,
        payload : {
            Linea :'',
            Monto_Recargar : ''
    
        }
    }),
    dispatch({
        type :SET_INIT_VALUES_RETIROS,
        payload : {
            Linea :'',
            Valor :'',
            Toquen : ''
        }
    })
}