import {GET_SIDE_LIST} from './type.js';
import axios from 'axios';

const getSideList = (kind, dispatch) => {
    axios.get(`/sideList/${kind}`)
    .then((results) => {
      console.log('GET_LIST request successful: ', results);
      dispatch({
          type: GET_LIST,
          payload: results.data
        });
    })
    .catch((err) => {
      console.log('error in list Data');
      dispatch('error');
    });
}



export default getSideList;
