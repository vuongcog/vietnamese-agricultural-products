// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import PropTypes from "prop-types";
export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/authen/signin" />;
  }
  return children;
}
export function ProtectedAuthenRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/admin/user" />;
  }

  return children;
}
ProtectedAuthenRoute.propTypes = {
  children: PropTypes.element,
};
ProtectedRoute.propTypes = {
  children: PropTypes.element,
};
