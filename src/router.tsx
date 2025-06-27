import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Catalog } from './pages/Catalog/Catalog';
import { ItemCard } from './pages/ItemCard/ItemCard';
import { Favorites } from './pages/Favorites/Favorites';
import { SearchResults } from './pages/SearchResults/SearchResults';
import { FilteringResults } from './pages/FilteringResults/FilteringResults';
import { LayoutAuth } from './components/LayoutAuth/LayoutAuth';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Settings } from './pages/Settings/Settings';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Catalog />
          </ProtectedRoute>
        ),
      },
      {
        path: '/selected/:imdbID',
        element: (
          <ProtectedRoute>
            <ItemCard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/favorites',
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
      {
        path: '/settings',
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: '/search/:request',
        element: (
          <ProtectedRoute>
            <SearchResults />
          </ProtectedRoute>
        ),
      },
      {
        path: '/filter/:request',
        element: (
          <ProtectedRoute>
            <FilteringResults />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    element: <LayoutAuth />,
    path: '/auth',
    children: [
      {
        path: '/auth/sign-up',
        element: <SignUp />,
      },
      {
        path: '/auth/sign-in',
        element: <SignIn />,
      },
    ],
  },
]);
