import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import ChartComponent from "./Test/Test";

const User = React.lazy(() => {
  return import("./admin/User/container");
});
const Category = React.lazy(() => {
  return import("./admin/Category/container");
});

const Order = React.lazy(() => {
  return import("./admin/Order/container");
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
import Product from "./admin/Product/container";
import CartContainer from "./user/cart/container";
import NotFound from "./page-not-found";
import FormEmailContainer from "../components/core/FormEmail/container";
import DialogMessage from "../components/core/DialogMessage";

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
          <Route path="/cart" element={<CartContainer />} />
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
          <Route
            path="/admin/test"
            element={
              <div>
                <DialogMessage>
                  <FormEmailContainer></FormEmailContainer>
                </DialogMessage>
              </div>
            }
          />
          {/* <Route path="/admin/test" element={<User />} /> */}
          <Route
            path="/admin/user"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <User />
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

          <Route
            path="/admin/product"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/admin/order"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Order />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
