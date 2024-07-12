import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import PropTypes from '../utils/prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [checkAuth, setCheckauth] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [accessToken, setAcessToken] = useState(Cookies.get('accsessToken'));

  const logout = () => {
    const accsessToken = Cookies.get('accsessToken');
    if (accsessToken) {
      setCheckauth(!checkAuth);
      Cookies.remove('accsessToken', { path: '/admin' });
      Cookies.remove('accsessToken', { path: '/authen/signin-management' });
    }
  };
  const logoutCustomer = () => {
    const accsessToken = Cookies.get('accsessToken');
    if (accsessToken) {
      setCheckauth(!checkAuth);
      Cookies.remove('accsessToken', { path: '/customer' });
      Cookies.remove('accsessToken', { path: '/authen/signin' });
    }
  };
  useEffect(() => {
    console.log(Cookies.get('accsessToken'));
  }, [location, navigate]);
  return (
    <AuthContext.Provider
      value={{ checkAuth, setCheckauth, logout, logoutCustomer, accessToken }}
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
