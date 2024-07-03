import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/user/Header";
import useInjectReducerSagaShopping from "../../useCustom/user/useInjectReducerSagaShopping";
import PropTypes from "../../utils/prop-types";
const UserLayout = ({ children }) => {
  useInjectReducerSagaShopping();
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
UserLayout.propTypes = {
  children: PropTypes.element,
};

export default UserLayout;
