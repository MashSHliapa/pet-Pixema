import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import './Switch.scss';

export function Switch() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input type="checkbox" checked={theme} className="switch__input" onChange={handleToggleTheme} />
      <span className="switch__slider"></span>
    </label>
  );
}
