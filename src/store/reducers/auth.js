import { AUTHENTICATE,SET_DID_TRY_AL ,REMOVE_TOKEN} from '../actions/auth';

const initialState = {
  token: null,
  pos:'',
  didTryAutoLogin: false

};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        pos:action.pos
      };
    case SET_DID_TRY_AL:
      return {
          ...state,
          didTryAutoLogin: true
    };
    case REMOVE_TOKEN :
      return {
        ...state,
        token : null
      }
    default:
      return state;
  }
};
