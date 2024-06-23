import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie, removeCookie } from "../utils/cookie/parseCookie";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const cookie = getCookie("accsessToken");
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(cookie));
  console.log(isAuthenticated);
  const logout = () => {
    const accsessToken = Cookies.get("accsessToken");
    if (accsessToken) {
      Cookies.remove("accsessToken", { path: "/" });
      // removeCookie("accsessToken", "/");
      setIsAuthenticated(false);
    }
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
