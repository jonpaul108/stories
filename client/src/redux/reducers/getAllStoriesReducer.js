import {GET_ALL_STORIES} from '../actions/type.js';

const initialState = {
  item: [1, 2, 3]
}

const getAllStoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STORIES:
      return {
        state,
        item: action.payload
      }
    default:
      return state
  }
}

export default getAllStoriesReducer;
