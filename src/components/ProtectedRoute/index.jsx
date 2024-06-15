// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("accessToken");
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
  const token = localStorage.getItem("accessToken");
  const { isAuthenticated } = useAuth();

  if (token) {
    return <Navigate to="/" />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
