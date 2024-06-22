import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import ChartComponent from "./Test/Test";
import User from "./admin/User/container";

const Test = React.lazy(() => {
  return import("./admin/Test/container");
});
const Category = React.lazy(() => {
  return import("./admin/Category/container");
});

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
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
        </Route>

        <Route
          path="/authen"
          element={
            <ProtectedAuthenRoute>
              <Authentication />
            </ProtectedAuthenRoute>
          }
        >
          <Route path="/authen/signin" element={<FormLogin />} />
          <Route path="/authen/signup" element={<FormRegister />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<ChartComponent />} />
          <Route path="/admin/user" element={<User />} />
          <Route
            path="/admin/test"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Test />
              </Suspense>
            }
          />
          <Route
            path="/admin/category"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Category />
              </Suspense>
            }
          />
        </Route>
        <Route path="/test" element={<ChartComponent />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
