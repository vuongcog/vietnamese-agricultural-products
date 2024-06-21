// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getCookie } from "../../utils/cookie/parseCookie";
import PropTypes from "prop-types";
export function ProtectedRoute({ children }) {
  const token = getCookie("accsessToken");
  const { isAuthenticated } = useAuth();

  if (!token) {
    return <Navigate to="authen/signin" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="authen/signin" />;
  }

  return children;
}

export function ProtectedAuthenRoute({ children }) {
  const token = getCookie("accsessToken");
  const { isAuthenticated } = useAuth();

  if (token) {
    return <Navigate to="/" />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
ProtectedAuthenRoute.propTypes = {
  children: PropTypes.element,
};
ProtectedRoute.propTypes = {
  children: PropTypes.element,
};
