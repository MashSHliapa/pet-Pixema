import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import './LayoutAuth.scss';

export function LayoutAuth() {
  return (
    <div className="layout-auth">
      <Header />
      <div className="layout-auth__outlet">
        <Outlet />
      </div>
      <p className="layout-auth__copyright">© All Rights Reserved</p>
    </div>
  );
}
