import React from "react";
import AdminLeftSidebar from "../../components/admin/LeftSidebar";
import AddminTopNav from "../../components/admin/TopNav";
import AddminFooter from "../../components/admin/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-app">
      <div id="admin-body" className="flex font-inter">
        <AdminLeftSidebar></AdminLeftSidebar>
        <main id="admin-content">
          <AddminTopNav></AddminTopNav>
          {children}
        </main>
      </div>
      <div id="footer">
        <AddminFooter></AddminFooter>
      </div>
    </div>
  );
};

export default AdminLayout;
