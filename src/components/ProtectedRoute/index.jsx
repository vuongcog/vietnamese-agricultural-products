// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const { isAuthenticated } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
