import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import books from './books';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  books,
});

export default rootReducer;
