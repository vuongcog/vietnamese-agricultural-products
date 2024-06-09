import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import ChartComponent from "./Test/Test";
import User from "./admin/User/container";
import Http from "../utils/http/http";
import axios from "axios";
import Test from "./admin/Test/container";
// import withAuth from "../../hocs/withAuth"; // Import the HOC
const App = () => {
  return (
    <Routes>
      <Route path="/" Component={UserLayout}>
        <Route path="/shoping" Component={() => <div>Home</div>}></Route>
      </Route>
      <Route path="/admin" Component={AdminLayout}>
        <Route path="/admin/dashboard" Component={ChartComponent}></Route>
        <Route path="/admin/user" Component={User}></Route>
        <Route path="/admin/test" Component={Test}></Route>
      </Route>
      <Route path="/test" Component={ChartComponent}></Route>
    </Routes>
  );
};

export default App;
