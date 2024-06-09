import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/" />;
    }
    return <Component {...props} />;
  };

  AuthComponent.displayName = `withAuth(${
    Component.displayName || Component.name || "Component"
  })`;

  return AuthComponent;
};

export default withAuth;
