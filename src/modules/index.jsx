import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={AdminLayout}></Route>
      <Route path="/home" Component={UserLayout}></Route>
    </Routes>
  );
};

export default App;
