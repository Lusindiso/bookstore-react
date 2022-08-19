import { useDispatch, useSelector } from 'react-redux';

import { categoriesActions } from '../../redux/categories/categories';

const Categories = () => {
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(categoriesActions.checkStatus());
  };
  return (
    <main>
      <button type="button" onClick={clickHandler}>Check Status</button>
      <p>{category}</p>
    </main>
  );
};

export default Categories;
