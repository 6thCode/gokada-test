import { combineReducers } from 'redux';
import contentReducer from './reducersList/contentReducer'

export default combineReducers({
    contentReducer: contentReducer,
});