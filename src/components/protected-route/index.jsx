/* eslint-disable no-empty-pattern */
// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import PropTypes from 'prop-types';
export function ProtectedRoute({ children }) {
  const {} = useAuth();

  if (!Cookies.get('accsessToken')) {
    return <Navigate to="/authen/signin-management" />;
  }
  return children;
}
export function ProtectedAuthenRoute({ children }) {
  const location = useLocation();
  const {} = useAuth();
  if (
    Cookies.get('accsessToken') &&
    location.pathname === '/authen/signin-management'
  ) {
    console.log('true');
    return <Navigate to="/admin" />;
  }
  if (Cookies.get('accsessToken') && location.pathname === '/authen/signin') {
    return <Navigate to="/customer" />;
  }

  return children;
}
ProtectedAuthenRoute.propTypes = {
  children: PropTypes.element,
};
ProtectedRoute.propTypes = {
  children: PropTypes.element,
};
