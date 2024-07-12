import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const CheckCookies = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return <Navigate to={'/customer'}></Navigate>;
  return children;
};

export default CheckCookies;
