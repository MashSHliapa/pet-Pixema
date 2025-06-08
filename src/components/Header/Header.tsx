import { NavLink } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import { SearchForm } from '../SearchForm/SearchForm';
import logo from '../../assets/icons/logo.svg';
import './Header.scss';

export function Header() {
  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__body">
          <NavLink to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="header__search search">
            <SearchForm />
          </div>
          <div className="header__user user">
            <div className="user__menu menu">
              <Menu />
            </div>
            <div className="user__name">Masha Shliapnikova</div>
          </div>
        </div>
      </div>
    </div>
  );
}
