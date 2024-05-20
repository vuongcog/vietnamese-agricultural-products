import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={UserLayout}>
        <Route path="/shoping" Component={() => <div>Home</div>}></Route>
      </Route>
      <Route path="/admin" Component={AdminLayout}></Route>
    </Routes>
  );
};

export default App;
