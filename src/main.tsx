import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import App from "./App";
import AdminRoutes from "./admin/routes/AdminRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        {/* Website */}

        <Route path="/*" element={<App />} />

        {/* Admin */}

        <Route
          path="/admin/*"
          element={<AdminRoutes />}
        />

      </Routes>

    </BrowserRouter>
  </StrictMode>
);