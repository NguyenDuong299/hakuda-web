import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import HomePage from "../pages/Home";
import NewsPage from "../pages/News";

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
    </Routes>
  );
};

export default AppRoutes;
