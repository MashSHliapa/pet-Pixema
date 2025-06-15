import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Catalog } from './pages/Catalog/Catalog';
import { ItemCard } from './pages/ItemCard/ItemCard';
import { Favorites } from './pages/Favorites/Favorites';
import { SearchResults } from './pages/SearchResults/SearchResults';
import { FilteringResults } from './pages/FilteringResults/FilteringResults';
import { SignIn } from './pages/SignIn/SignIn';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // {
      //   path: '/',
      //   element: <Catalog />,
      // },
            {
        path: '/',
        element: <SignIn />,
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
      {
        path: '/filter/:request',
        element: <FilteringResults />,
      },
    ],
  },
]);
