import{ADMIN_SIGN_IN}from './type.js';

const adminSignOut = () => {
  return {
    type: ADMIN_SIGN_IN,
    payload: false
  }
}

export default adminSignOut;
