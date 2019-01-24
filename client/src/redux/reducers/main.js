import {combineReducers} from 'redux';
import changPageReducer from './changePageReducer.js';
import displayDocumentReducer from './displayDocumentReducer';
import sideListReducer from './getsideListReducer.js';
import adminSignInReducer from './adminSignInReducer.js';
import getAllStoriesReducer from './getAllStoriesReducer.js';
import storyInfoReducer from './storyInfoReducer.js';

const rootReducer = combineReducers({
  page: changPageReducer,
  document: displayDocumentReducer,
  signedIn: adminSignInReducer,
  allStories: getAllStoriesReducer,
  storyInfo: storyInfoReducer
});

export default rootReducer;
