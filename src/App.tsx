// App.tsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
