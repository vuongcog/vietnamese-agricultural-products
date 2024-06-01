import React from "react";
import AdminLeftSidebar from "../../components/admin/LeftSidebar";
import AddminTopNav from "../../components/admin/TopNav";
import AddminFooter from "../../components/admin/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-app">
      <div id="admin-body" className="flex font-inter">
        <AdminLeftSidebar></AdminLeftSidebar>
        <main id="admin-content" className="w-full">
          <AddminTopNav></AddminTopNav>
          {children}
          <Outlet></Outlet>
        </main>
      </div>
      <div id="footer">
        <AddminFooter></AddminFooter>
      </div>
    </div>
  );
};

export default AdminLayout;
