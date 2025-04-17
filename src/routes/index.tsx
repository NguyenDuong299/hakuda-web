import { Routes, Route, Outlet } from "react-router-dom";
import DefaultLayout from "../components/partials/default";
import HomePage from "../pages/Home";
import NewsPage from "../pages/News";
import Login from "../pages/Account/login";
import Register from "../pages/Account/register";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Product from "../pages/Products";
import NewDetail from "../pages/NewDetail";
import Profile from "../pages/Account/Profile";
import ForgotPassword from "../pages/Account/ForgotPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewDetail />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
