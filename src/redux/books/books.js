import { createSlice } from '@reduxjs/toolkit';

const books = createSlice({
  name: 'book',
  initialState: { books: [] },
  reducers: {
    addBook(state, action) {
      state.push(action.payload.book);
    },
    removeBook(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const booksActions = books.actions;

export default books;
