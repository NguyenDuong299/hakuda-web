import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import HomePage from "../pages/Home";
import NewsPage from "../pages/News";
import Login from "../pages/Account/login";
import Register from "../pages/Account/register";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Product from "../pages/Products";
import NewDetail from "../pages/NewDetail";

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
        path="/products"
        element={
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        }
      />
       <Route
        path="/products/:slug"
        element={
          <DefaultLayout>
            <ProductDetail />
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
            <NewDetail />
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
