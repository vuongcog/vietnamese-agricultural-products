import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../../components/user/Header';
import useInjectReducerSagaShopping from '../../useCustom/user/useInjectReducerSagaShopping';
import PropTypes from '../../utils/prop-types';
import axios from 'axios';
const LayoutUser = ({ children }) => {
  useInjectReducerSagaShopping();

  axios.get('https://vapi.vnappmob.com/api/province');
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
