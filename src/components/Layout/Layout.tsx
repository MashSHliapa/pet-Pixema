import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}
