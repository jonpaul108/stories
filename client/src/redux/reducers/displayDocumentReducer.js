import {DISPLAY_DOCUMENT} from '../actions/type.js';

const initialState = {
  item: 'hey'
}

const displayDocumentReducer = (state = initialState, action) => {
  switch(action.type) {
    case DISPLAY_DOCUMENT:
      return {
        state,
        item: action.payload
      }
    default:
        return state;
  }

}

export default displayDocumentReducer;
