import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/BookReducer'; 

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
