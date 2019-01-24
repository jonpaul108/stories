import {STORY_INFO} from './type.js';
import axios from 'axios';

const storyInfo = (title, author, url, dispatch) => {
  axios.get(url)
    .then((results) => {
      const story = results.data;
      console.log('storyInfo Results: ', story);
      dispatch({
        type: STORY_INFO,
        story,
        title,
        author,
      })
    })
    .catch((err) => {
      console.log('failed to retrieve story')
    })

}

export default storyInfo;
