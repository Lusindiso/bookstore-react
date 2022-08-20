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
  const bookList = books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      author={book.author}
      title={book.title}
      category={book.category}
    />
  ));

  return (
    <main>
      <div className="container">
        {bookList}
        <AddBook />
      </div>
    </main>
  );
};

export default Books;
