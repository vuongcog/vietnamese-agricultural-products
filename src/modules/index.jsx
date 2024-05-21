import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import ChartComponent from "./Test/Test";
// import reducerInjectors from "../utils/reducerInjectors";
import checkStore from "../utils/checkStore";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={UserLayout}>
        <Route path="/shoping" Component={() => <div>Home</div>}></Route>
      </Route>
      <Route path="/admin" Component={AdminLayout}></Route>
      <Route path="/test" Component={ChartComponent}></Route>
    </Routes>
  );
};

export default App;
