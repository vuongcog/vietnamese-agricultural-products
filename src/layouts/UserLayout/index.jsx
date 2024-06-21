import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/user/Header";
import ProgressFullScreen from "../../components/core/Progress";
const UserLayout = ({ children }) => {
  return (
    <div>
      <UserHeader></UserHeader>
      <div>
        {children}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserLayout;
