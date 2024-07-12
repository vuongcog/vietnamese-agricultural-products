import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import PropTypes from '../utils/prop-types';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [checkAuth, setCheckauth] = useState(false);
  const accessToken = Cookies.get('accsessToken');
  const logout = () => {
    const accsessToken = Cookies.get('accsessToken');
    if (accsessToken) {
      setCheckauth(!checkAuth);
      Cookies.remove('accsessToken');
    }
  };

  return (
    <AuthContext.Provider
      value={{ checkAuth, setCheckauth, logout, accessToken }}
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
