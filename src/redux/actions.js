import { FETCH_CONTENT } from './types'
import axios from 'axios';

// fetch list of users
export const fetchContent = () => {
  return (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({
          type: FETCH_CONTENT,
          payload: response.data,
        });
      })
      .catch((err) => console.error('An error occurred', err));
  };
};