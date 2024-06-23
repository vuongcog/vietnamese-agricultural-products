import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/user/Header";
import Cart from "../../components/core/Cart";
const UserLayout = ({ children }) => {
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

export default UserLayout;
