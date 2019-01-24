import {GET_SIDE_LIST} from '../actions/type.js';


const initialState = {
  item: ['story 1', 'story 2', 'story 3']
}

const sideListReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SIDE_LIST:
      return {
        state,
        item: action.payload
      }
    default:
      return state
  }
}

export default sideListReducer;
