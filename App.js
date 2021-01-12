import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from "redux-logger";

import authReducer from './src/store/reducers/auth';
import productReducer from './src/store/reducers/product';
import balanceReducer from './src/store/reducers/balance';
import recargasReducer from './src/store/reducers/recargas'
import betCompanies from './src/store/reducers/betCompanies'
import digitales from './src/store/reducers/digitales'
import billeteras from './src/store/reducers/billeteras'
import certificados from './src/store/reducers/certificados'
import AppNavigator from './src/navigation'
import Internacional from "./src/store/reducers/Internacional"
import TvReducer from "./src/store/reducers/Tv"
import Facturas from "./src/store/reducers/Facturas"
const rootReducer = combineReducers({
  auth:authReducer,
  product:productReducer,
  balance:balanceReducer,
  recargas:recargasReducer,
  betCompanies:betCompanies,
  digital : digitales,
  billeteras : billeteras,
  certificados : certificados,
  Internacional : Internacional,
  TvReducer : TvReducer,
  Facturas : Facturas

});
const middlewares = [logger, ReduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    );
  }
}