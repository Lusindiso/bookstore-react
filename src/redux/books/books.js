import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '255459688',
      author: 'Frank Herbit',
      title: 'Dune',
    },
    {
      id: '20322515231530',
      author: 'Suzanne Collins',
      title: 'Capital in the Twenty-First Century',
    },
  ],
};
const books = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});
export const booksActions = books.actions;
export default books;
