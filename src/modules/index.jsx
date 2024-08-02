import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutUser from '../layouts/LayoutUser';
import ChartComponent from './Test/Test';

const User = React.lazy(() => import('./admin/User/container'));
const Category = React.lazy(() => import('./admin/Category/container'));
const Blog = React.lazy(() => import('./admin/Blog/container'));
const BlogCategory = React.lazy(() =>
  import('./admin/Blog-Category/container')
);
const Banner = React.lazy(() => import('./admin/Banner/container'));
const Coupon = React.lazy(() => import('./admin/Coupon/container'));
const Order = React.lazy(() => import('./admin/Order/container'));
import Home from './user/home/container';
import Shopping from './user/shoping/container';
import Authentication from './authentication/container';
import FormLogin from './authentication/components/FormLogin';
import DetailProduct from './user/detail/container';
import { AuthProvider } from '../contexts/AuthContext';
import {
  ProtectedAuthenRoute,
  ProtectedRoute,
} from '../components/protected-route';
import Product from './admin/Product/container';
import CartContainer from './user/cart/container';
import NotFound from './page-not-found';
import BlogCategoyGuest from './user/blog-with-category/container';
import BlogContainer from './user/blog-categories/container';
import BlogGuestContainer from './user/blog/container';
import FormRegisterContainer from './authentication/components/FormRegister/container';
import FormLoginManagement from './authentication/components/FormLoginManagement';
import FormManagementProvider from './authentication/components/FormLoginManagement/FormContext';
import FormProvider from './authentication/components/FormLogin/FormContext';
import CheckoutContainer from './user/oder/container';
import axios from 'axios';
import Profile from './user/profile';
import CartNotToken from './user/cart-not-token/container';
import PaymentSuccsess from './mayment-succsess/PaymentSuccsess';
import PaymentFailed from './PaymentFailed';
import useProducerDataUser from '../useCustom/admin/useProducerDataUser';
import { MAPPER_PERMISSION_ROUTE_USER } from '../constants/mapper-permission-role';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const { inforUser } = useProducerDataUser();
  useEffect(() => {
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    if (subdomain === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setIsLoaded(true);
  }, [location]);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <AuthProvider>
      <Routes>
        {!isAdmin && (
          <Route path="/" element={<LayoutUser />}>
            <Route path="/" element={<Home />} />
            <Route path="/thanhcong" element={<PaymentSuccsess />} />
            <Route path="/thatbai" element={<PaymentFailed />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/blog-categories" element={<BlogContainer />} />
            <Route path="/blogs" element={<BlogCategoyGuest />} />
            <Route path="/blogs/blog/:slug" element={<BlogGuestContainer />} />
            <Route
              path="/cart"
              element={
                Cookies.get('accsessToken') ? (
                  <CartContainer />
                ) : (
                  <CartNotToken />
                )
              }
            />{' '}
            <Route path="/detail" element={<DetailProduct />} />
            <Route path="/purchase" element={<DetailProduct />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        )}
        <Route path="/authen" element={<Authentication />}>
          <Route
            path="/authen/signin"
            element={
              <ProtectedAuthenRoute>
                <FormProvider>
                  <FormLogin />
                </FormProvider>
              </ProtectedAuthenRoute>
            }
          />
          <Route
            path="/authen/signin-management"
            element={
              <ProtectedAuthenRoute>
                <FormManagementProvider>
                  <FormLoginManagement />
                </FormManagementProvider>
              </ProtectedAuthenRoute>
            }
          />
          <Route path="/authen/signup" element={<FormRegisterContainer />} />
        </Route>
        {isAdmin && (
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LayoutAdmin />
              </ProtectedRoute>
            }
          >
            <Route path="/*" element={<div />} />
            <Route path="/dashboard" element={<ChartComponent />} />
            {MAPPER_PERMISSION_ROUTE_USER[inforUser?.role] && (
              <Route
                path="/user"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <User />
                  </Suspense>
                }
              />
            )}
            <Route
              path="/category"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Category />
                </Suspense>
              }
            />
            <Route
              path="/product"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Product />
                </Suspense>
              }
            />

            <Route
              path="/blog"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/blog-category"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <BlogCategory />
                </Suspense>
              }
            />
            <Route
              path="/banner"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Banner />
                </Suspense>
              }
            />
            <Route
              path="/coupon"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Coupon />
                </Suspense>
              }
            />
            <Route
              path="/order"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Order />
                </Suspense>
              }
            />
          </Route>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};
export default App;
