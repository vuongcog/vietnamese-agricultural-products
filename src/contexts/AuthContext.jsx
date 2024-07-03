import React, { createContext, useContext, useState } from "react";
import { getCookie } from "../utils/cookie/parseCookie";
import Cookies from "js-cookie";
import PropTypes from "../utils/prop-types";
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
AuthProvider.propTypes = {
  children: PropTypes.element,
};

export function useAuth() {
  return useContext(AuthContext);
}
