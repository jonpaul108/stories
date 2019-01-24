import {DISPLAY_DOCUMENT} from './type.js';

const displayDocument = (url) => {
  return {
    type: DISPLAY_DOCUMENT,
    payload: url
  }
}

export default displayDocument;
