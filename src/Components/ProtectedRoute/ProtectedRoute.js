import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
    const {
    isAuthenticated,
      user,
      

    } = useAuth0();
  const isUser = isAuthenticated && user;
  return isUser ? <Outlet /> : <Navigate to="/" />;

}
