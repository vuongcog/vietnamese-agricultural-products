import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = ({ children }) => {
  return (
    <div>
      <div>Header</div>
      <div>
        {children}
        <Outlet></Outlet>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default UserLayout;
