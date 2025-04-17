import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthGuard } from "./components/common/AuthGuard";
import { ToastProvider } from "./components/common/ToastProvider";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthGuard>
      <ToastProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ToastProvider>
    </AuthGuard>
  </React.StrictMode>
);
