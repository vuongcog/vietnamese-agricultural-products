import React, { useEffect } from 'react';
import AdminLeftSidebar from '../../components/admin/LeftSidebar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from '../../utils/prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';
import useInjectReducerSagaDataUser from '../../useCustom/admin/useInjectReducerSagaGlobalAdmin';
import { FETCH_DATA_USER } from '../../modules/admin/store/constants/action';
import { useDispatch } from 'react-redux';
const LayoutAdmin = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch({
        type: FETCH_DATA_USER,
        payload: { endpoint: '/taikhoan/thongtin-taikhoan' },
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useInjectReducerSagaDataUser();

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/user');
    }
  }, [location, navigate]);
  return (
    <div className="admin-app">
      <div id="admin-body" className="flex font-inter">
        <AdminLeftSidebar></AdminLeftSidebar>
        <main
          id="admin-content"
          className={classNames(`w-full`, styles.content)}
        >
          {/* <AddminTopNav></AddminTopNav> */}
          {children}
          <Outlet></Outlet>
        </main>
      </div>
      {/* <div id="footer">
        <AddminFooter></AddminFooter>
      </div> */}
    </div>
  );
};
LayoutAdmin.propTypes = {
  children: PropTypes.element,
};
export default LayoutAdmin;
