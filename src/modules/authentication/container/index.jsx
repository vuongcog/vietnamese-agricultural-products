import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from '../../../utils/prop-types';

const Authentication = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/authen' || location.pathname === '/authen/') {
      navigate('/authen/signin');
    }
  }, [location, navigate]);

  return (
    <div className={styles.layout}>
      {children}
      <Outlet></Outlet>
    </div>
  );
};
Authentication.propTypes = {
  children: PropTypes.element,
};
export default Authentication;
