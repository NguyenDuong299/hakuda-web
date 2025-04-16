// App.tsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthCheck } from "./hooks/useAuthCheck";

function App() {
  useAuthCheck()
  return (
    <BrowserRouter>
      <ToastContainer />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
