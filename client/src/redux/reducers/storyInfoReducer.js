import {STORY_INFO} from '../actions/type.js';

const initialState = {
  author: 'Jonathan McNamara',
  title: 'Billy-Bill-Billson',
  text: ['This is a short story for people living on the other side of the world.', 'There once was a man.', 'He lived in a town called Brad.', 'Brad was also his name.']
}

const storyInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORY_INFO:
      return {
        state,
        author: action.author,
        title: action.title,
        text: action.story
      }
    default:
      return state
  }
}

export default storyInfoReducer;
