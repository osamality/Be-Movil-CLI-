import { SET_USER_PRODUCTS, SET_ACTIVE_PRODUCTS, SET_ACTIVE_PROVIDER } from '../actions/product';

const initialState = {
  products:[],
  activeProduct:[],
  activeProvider:{}
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PRODUCTS:
      return {
        products: action.products,
      };
      case SET_ACTIVE_PRODUCTS:
        return {
          ...state,
          activeProduct:action.activeProducts
        }
        case SET_ACTIVE_PROVIDER:
          return {
            ...state,
            activeProvider:action.activeProvider
          }
    default:
      return state;
  }
};
