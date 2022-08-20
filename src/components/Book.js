import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import classes from './Book.module.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div className={classes.book}>
      <div className={classes.category}>{category}</div>
      <h3 className="title">{title}</h3>
      <div className="author">{author}</div>
      <div className={classes.buttons}>
        <button type="button">Comments</button>
        <button id={id} type="button" onClick={removeBookHandler}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
