import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: true,
  handleToggleTheme: () => {},
});
