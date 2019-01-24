import {CHANGE_PAGE} from '../actions/type.js';

const initialState = {
  item: 'home'
}

const changePageReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_PAGE:
      return {
        state,
        item: action.payload
      }
    default:
        return state;
  }

}

export default changePageReducer;
