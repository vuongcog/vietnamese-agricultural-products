import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import PropTypes from '../utils/prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [checkAuth, setCheckauth] = useState(false);
  const accessToken = Cookies.get('accsessToken');
  const logout = () => {
    Cookies.remove('accsessToken');
    setCheckauth(!checkAuth);

    // axios
    //   .post(
    //     import.meta.env.VITE_API_URL_SERVER + '/logout',
    //     {},
    //     {
    //       headers: {
    //         Authorization: `bearer ${accessToken}`,
    //       },
    //     }
    //   )
    //   .then(res => {
    //     if (accessToken) {
    //       setCheckauth(!checkAuth);
    //       console.log(res);
    //     }
    //     toast.success('Đăng xuất thành công');
    //   })
    //   .catch(err => {
    //     // toast.error('Đăng xuất thất bại');
    //   });
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
