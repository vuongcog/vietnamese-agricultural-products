// AuthContext.js
import React, { createContext, useContext, useState } from "react";

// Tạo Context
const AuthContext = createContext();

// Cung cấp Auth Context
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("accessToken"))
  );
  console.log("auth");
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

// Custom hook để sử dụng AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
