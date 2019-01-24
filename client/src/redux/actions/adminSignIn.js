import {ADMIN_SIGN_IN} from './type.js';
import axios from 'axios';

const signedIn = () => {
  return {
    type: ADMIN_SIGN_IN,
    payload: true
  }
}

const failedToSignIn = () => {
  return {
    type: ADMIN_SIGN_IN,
    payload: false
  }
}


const adminSignIn = (username, password, dispatch) => {
  axios.get('/admin', {
    username,
    password
  })
  .then((results) => {
    dispatch(signedIn());
  })
  .catch((err) => {
    dispatch(failedToSignIn())
  })
}

export default adminSignIn;
