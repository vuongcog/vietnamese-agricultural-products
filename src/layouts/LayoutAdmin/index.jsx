import React, { useEffect } from "react";
import AdminLeftSidebar from "../../components/admin/LeftSidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "../../utils/prop-types";

const LayoutAdmin = ({ children }) => {
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
LayoutAdmin.propTypes = {
  children: PropTypes.element,
};
export default LayoutAdmin;
