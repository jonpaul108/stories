import {ADMIN_SIGN_IN} from '../actions/type.js';

const initialState = {
  item: false
}

const adminSignInReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADMIN_SIGN_IN:
      return {
        state,
        item: action.payload
      }
    default:
      return state
  }
}

export default adminSignInReducer;
