import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const UserLayout = ({ children }) => {
  const [search, setSearch] = useState("");
  const fetch = async () => {
    console.log(search);
  };
  fetch();
  useEffect(() => {}, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
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
