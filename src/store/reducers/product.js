import { SET_USER_PRODUCTS, SET_ACTIVE_PRODUCTS } from '../actions/product';

const initialState = {
  products:[],
  activeProduct:[]
 
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
    default:
      return state;
  }
};
