import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { Menu } from '../Menu/Menu';
import { SearchForm } from '../SearchForm/SearchForm';
import logoDark from '../../assets/icons/logo-dark.svg';
import logoLight from '../../assets/icons/logo-light.svg';
import './Header.scss';

export function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__body">
          <NavLink to="/" className="header__logo">
            {theme ? <img src={logoDark} alt="logo" /> : <img src={logoLight} alt="logoLight" />}
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
