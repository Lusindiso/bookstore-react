import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <div className={classes.container}>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink style={{ color: 'rgba(5, 20, 20, 0.5)' }} to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
export default Header;
