import {GET_ALL_STORIES} from './type.js';
import axios from 'axios';

const getAllStories = (dispatch) => {
  axios.get('/retrieve/stories')
  .then((results) => {
    console.log('all stories: ', results);
    dispatch({
      type: GET_ALL_STORIES,
      payload: results.data
    })
  })
  .catch((err) => {
    console.log('getAllStories: ', err)
  })
}


export default getAllStories;
