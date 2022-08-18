import { useDispatch } from 'react-redux';
import { categoriesActions } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(categoriesActions.checkStatus());
  };
  return (
    <main>
      <button type="button" onClick={clickHandler}>Check Status</button>
    </main>
  );
};

export default Categories;
