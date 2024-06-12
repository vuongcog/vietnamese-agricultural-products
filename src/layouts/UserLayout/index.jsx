import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/user/Header";
const UserLayout = ({ children }) => {
  const [search, setSearch] = useState("");
  const fetch = async () => {
    console.log(search);
  };
  fetch();
  useEffect(() => {}, [search]);

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
