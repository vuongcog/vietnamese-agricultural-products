import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import UserHeader from '../../components/user/Header';
import useInjectReducerSagaShopping from '../../useCustom/user/useInjectReducerSagaShopping';
import PropTypes from '../../utils/prop-types';
const LayoutUser = ({ children }) => {
  useInjectReducerSagaShopping();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/customer');
    }
  }, [location, navigate]);
  return (
    <div>
      <UserHeader></UserHeader>
      <div className="mt-[80px]">
        {children}
        <Outlet></Outlet>
      </div>
    </div>
  );
};
LayoutUser.propTypes = {
  children: PropTypes.element,
};

export default LayoutUser;
