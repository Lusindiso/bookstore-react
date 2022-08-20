/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayBooks } from '../../redux/books/books';
import Book from '../Book';
import AddBook from '../UI/AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  const bookList = [];
  return (
    <main>
      <div className="container">
        {books.map(book=><Book
    key={book.id}
    id={book.id}
    author={book.author}
    title={book.title}
  />,)}
        <AddBook />
      </div>
    </main>
  );
};

export default Books;
