import {FETCH_CONTENT} from '../types';

const initialState = {
  results: [],
  isLoading: true,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTENT:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default contentReducer;
