import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import ChartComponent from "./Test/Test";
import reducerInjectors from "../utils/reducerInjectors";
import checkStore from "../utils/checkStore";
import httpClient from "../utils/http/httpClient";
import axios from "axios";
import { document } from "postcss";
import CrudList from "../components/admin/CrudList";
import User from "./admin/CrudUser/container";

const App = () => {
  // const fetchAPI = async () => {
  //   const config = {
  //     responseType: "json",
  //     headers: {
  //       "X-API-KEY": "449a3aff26c2fbc9635100375b0e018fd3a4e194",
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const data = {
  //     q: "apple inc",
  //   };
  //   const res = await httpClient().post(
  //     "https://google.serper.dev/images",
  //     data,
  //     config
  //   );
  //   // .then((res) => {})
  //   // .catch((err) => {
  //   //   console.log("that bai");
  //   // });
  //   console.log(JSON.parse(res.data));
  // };
  // fetchAPI();
  return (
    <Routes>
      <Route path="/" Component={UserLayout}>
        <Route path="/shoping" Component={() => <div>Home</div>}></Route>
      </Route>
      <Route path="/admin" Component={AdminLayout}>
        <Route path="/admin/dashboard" Component={ChartComponent}></Route>
        <Route path="/admin/user" Component={User}></Route>
      </Route>
      <Route path="/test" Component={ChartComponent}></Route>
    </Routes>
  );
};

export default App;
