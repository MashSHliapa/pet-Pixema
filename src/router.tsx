import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Catalog } from './pages/Catalog/Catalog';
import { ItemCard } from './pages/ItemCard/ItemCard';
import { Favorites } from './pages/Favorites/Favorites';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SearchResults } from './pages/SearchResults/SearchResults';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Catalog />,
      },
      {
        path: '/selected/:imdbID',
        element: <ItemCard />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/search/:request',
        element: <SearchResults />,
      },
    ],
  },
]);
