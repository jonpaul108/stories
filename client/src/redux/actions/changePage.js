import {CHANGE_PAGE} from './type.js';

const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page
  }
}

export default changePage;
