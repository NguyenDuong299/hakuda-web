import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import HomePage from "../pages/Home";
import NewsPage from "../pages/News";
import Login from "../pages/account/login";
import Register from "../pages/account/register";

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
    </Routes>
  );
};

export default AppRoutes;
