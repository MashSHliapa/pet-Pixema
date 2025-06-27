import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const isAuthenticated = () => {
  return Boolean(localStorage.getItem('token'));
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/auth/sign-in" replace />;
  }
  return children;
}
