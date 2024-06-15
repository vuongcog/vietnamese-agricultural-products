import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import ChartComponent from "./Test/Test";
import User from "./admin/User/container";
import Test from "./admin/Test/container";
import Home from "./user/home/container";
import Shopping from "./user/shoping/container";
import Authentication from "./authentication/container";
import FormLogin from "./authentication/components/FormLogin";
import FormRegister from "./authentication/components/FormRegister";
import DetailProduct from "./user/detail/container";
import { AuthProvider } from "../contexts/AuthContext";
import {
  ProtectedAuthenRoute,
  ProtectedRoute,
} from "../components/ProtectedRoute";
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <UserLayout></UserLayout>
            </ProtectedRoute>
          }
        >
          <Route path="/" Component={Home}></Route>
          <Route path="/shopping" Component={Shopping}></Route>
          <Route path="/detail/:id" Component={DetailProduct}></Route>
        </Route>

        <Route
          path="/authen"
          element={
            <ProtectedAuthenRoute>
              <Authentication></Authentication>
            </ProtectedAuthenRoute>
          }
        >
          <Route path="/authen/signin" Component={FormLogin}></Route>
          <Route path="/authen/signup" Component={FormRegister}></Route>
        </Route>

        <Route path="/admin" Component={AdminLayout}>
          <Route path="/admin/dashboard" Component={ChartComponent}></Route>
          <Route path="/admin/user" Component={User}></Route>
          <Route path="/admin/test" Component={Test}></Route>
        </Route>
        <Route path="/test" Component={ChartComponent}></Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
