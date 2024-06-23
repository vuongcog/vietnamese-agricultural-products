import React, { useEffect } from "react";
import AdminLeftSidebar from "../../components/admin/LeftSidebar";
// import AddminTopNav from "../../components/admin/TopNav";
// import AddminFooter from "../../components/admin/Footer";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/admin" || location.pathname === "/admin/") {
      navigate("/admin/dashboard");
    }
  }, [location, navigate]);

  return (
    <div className="admin-app">
      <div id="admin-body" className="flex font-inter">
        <AdminLeftSidebar></AdminLeftSidebar>
        <main id="admin-content" className="w-full">
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

export default AdminLayout;
