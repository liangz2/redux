import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'

export default combineReducers({
  books: booksReducer,
  activeBook: ActiveBook
});