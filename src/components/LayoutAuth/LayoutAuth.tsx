import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import './LayoutAuth.scss';

export function LayoutAuth() {
  return (
    <div className="layout-auth">
      <Header />
      <Outlet />
    </div>
  );
}
