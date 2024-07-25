import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../../components/user/Header';
import useInjectReducerSagaShopping from '../../useCustom/user/useInjectReducerSagaShopping';
import PropTypes from '../../utils/prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_DATA_USER } from '../../actions/action-infor-user';
const LayoutUser = ({ children }) => {
  const dispatch = useDispatch();
  useInjectReducerSagaShopping();
  useEffect(() => {
    try {
      dispatch({
        type: FETCH_DATA_USER,
        payload: { endpoint: '/taikhoan/thongtin-nguoidung' },
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
