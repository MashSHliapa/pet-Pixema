import { Menu } from '../Menu/Menu';
import logo from '../../assets/icons/logo.svg';
import filter from '../../assets/icons/filter_icon.svg';
import './Header.scss';

export function Header() {
  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__search search">
            <form action="#" className="search__form">
              <input type="text" className="search__input" placeholder="Search" />
              <div className="search__filter">
                <img src={filter} alt="filter" />
              </div>
            </form>
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
