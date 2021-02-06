// import { AsyncStorage } from 'react-native';
import {SERVER_URL} from '../../config/config'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from "jwt-decode";

export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';
export const REMOVE_TOKEN = 'REMOVE_TOKEN'


export const setDidTryAL = () => {
    return { type: SET_DID_TRY_AL };
};

export const authenticate = (token,pos) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE,token: token, pos: pos });
  };
};


export const login = (username, password) => {
  return async dispatch => {
    const response = await axios.post(
      `${SERVER_URL}/api/api-token-auth/`
       ,
      {
        username: "ahmed_full",
        password: "Ahmed2hamdi",
      }
    );
    // const user = jwt(response?.data?.token);
    // console.log(user)

    if (response.status==1) {
      console.log(response,"res")

      throw new Error('Invalid Credentials');
    }

    dispatch(
      authenticate(
        response.data.token ,
        response.data.pos
      )
    );
    saveDataToStorage(response.data.token,response.data.pos);
  };
};


const saveDataToStorage = (token,pos) => {
  AsyncStorage.setItem(
    'token',
    JSON.stringify({
      token: token,
      pos: pos
    })
  );
};

export const removeToken = ()=> dispatch=>{
 dispatch({
   type : REMOVE_TOKEN
 })
}
