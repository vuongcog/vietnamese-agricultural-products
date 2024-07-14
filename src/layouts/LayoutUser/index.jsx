import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../../components/user/Header';
import useInjectReducerSagaShopping from '../../useCustom/user/useInjectReducerSagaShopping';
import PropTypes from '../../utils/prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
const LayoutUser = ({ children }) => {
  useInjectReducerSagaShopping();

  return (
    <div>
      <UserHeader></UserHeader>
      <div className={classNames(`mt-[80px]`, styles.content)}>
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
