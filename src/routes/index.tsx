import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import HomePage from "../pages/Home";
import NewsPage from "../pages/News";
import Login from "../pages/account/login";
import Register from "../pages/account/register";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/cart";
import Product from "../pages/products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      />
      <Route
        path="/news"
        element={
          <DefaultLayout>
            <NewsPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/product"
        element={
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        }
      />
      <Route
        path="/account/login"
        element={
          <DefaultLayout>
            <Login />
          </DefaultLayout>
        }
      />
      <Route
        path="/account/register"
        element={
          <DefaultLayout>
            <Register />
          </DefaultLayout>
        }
      />
      <Route
        path="/news/:slug"
        element={
          <DefaultLayout>
            <ProductDetail />
          </DefaultLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <DefaultLayout>
            <Cart />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
