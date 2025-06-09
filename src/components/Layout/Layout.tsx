import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import './Layout.scss';
import { Filters } from '../Filters/Filters';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Filters />
    </div>
  );
}
