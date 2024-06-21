// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { getCookie } from "../utils/cookie/parseCookie";

// Tạo Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const cookie = getCookie("accsessToken");
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(cookie));

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ setIsAuthenticated, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
