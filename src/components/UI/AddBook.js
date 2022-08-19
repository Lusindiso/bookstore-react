import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions } from '../../redux/books/books';
import { sendBooksData } from '../../redux/books/booksActions';
import classes from './AddBook.module.css';

const AddBook = () => {
	@@ -19,11 +20,17 @@ const AddBook = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 2 && author.length > 2) {
      const newBook = {
        id: Math.random().toString(),
        title,
        author,
        category: 'Action',
      };
      dispatch(sendBooksData(newBook));
      const key = newBook.id;
      const obj = {};
      obj[key] = [newBook];
      dispatch(booksActions.addBook(obj));
      setTitle('');
      setAuthor('');
    }
	@@ -32,8 +39,18 @@ const AddBook = () => {
    <div className={classes.addbook}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book title"
          onChange={titleChangeHandler}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={authorChangeHandler}
          value={author}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
