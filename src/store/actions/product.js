import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_URL} from '../../config/config'
import axios from 'axios'

export const SET_USER_PRODUCTS = 'SET_USER_PRODUCTS';
export const SET_ACTIVE_PRODUCTS= 'SET_ACTIVE_PRODUCTS';
export const SET_ACTIVE_PROVIDER = 'SET_ACTIVE_PROVIDER';

export const saveProducts = (products,) => {
  return dispatch => {
    dispatch({ type: SET_USER_PRODUCTS, products:products });
  };
};

export const saveActiveProducts = (activeProducts)=>{
  return dispatch =>{
    dispatch ({type:SET_ACTIVE_PRODUCTS,activeProducts:activeProducts})
  }
}

export const setActiveProvider = (activeProvider)=>{
  return dispatch =>{
    dispatch ({type:SET_ACTIVE_PROVIDER,activeProvider:activeProvider})
  }
}


export const getProducts =async () => {
    const token = await AsyncStorage.getItem('token');
    return async dispatch => {
    try{

        const response = await axios.get(
      `${SERVER_URL}/api/get-products/`,
      { headers: {"Authorization" : token} }
    );
    dispatch(
        saveProducts(response.results,)
    );
    }
    catch{
        console.log("erroe")
    }

  };
};

