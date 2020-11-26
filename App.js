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

import AppNavigator from './src/navigation'
const rootReducer = combineReducers({
  auth:authReducer,
  product:productReducer,
  balance:balanceReducer,
  recargas:recargasReducer,
  betCompanies:betCompanies

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