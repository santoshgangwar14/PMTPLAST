import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Enquiries from "../pages/Enquiries";
import Certificates from "../pages/Certificates";
import PriceList from "../pages/PriceList";
import Catalogue from "../pages/Catalogue";
import TechnicalDatasheet from "../pages/TechnicalDatasheet";
import CorporateProfile from "../pages/CorporateProfile";


import Layout from "../components/Layout";

const isAuthenticated = () =>
  localStorage.getItem("pmt_admin") === "true";

function Private({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

export default function AdminRoutes() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Dashboard */}
      <Route
        path="/"
        element={
          <Private>
            <Layout>
              <Dashboard />
            </Layout>
          </Private>
        }
      />

      {/* Enquiries */}
      <Route
        path="/enquiries"
        element={
          <Private>
            <Layout>
              <Enquiries />
            </Layout>
          </Private>
        }
      />

      {/* Certificates */}
      <Route
        path="/certificates"
        element={
          <Private>
            <Layout>
              <Certificates />
            </Layout>
          </Private>
        }
      />

      {/* Catalogue */}
      <Route
        path="/catalogue"
        element={
          <Private>
            <Layout>
              <Catalogue />
            </Layout>
          </Private>
        }
      />

      {/* Price List */}
      <Route
        path="/price-list"
        element={
          <Private>
            <Layout>
              <PriceList />
            </Layout>
          </Private>
        }
      />

      {/* Technical Datasheet */}
      <Route
        path="/technical-datasheet"
        element={
          <Private>
            <Layout>
              <TechnicalDatasheet />
            </Layout>
          </Private>
        }
      />

      {/* Corporate Profile */}
      <Route
        path="/corporate-profile"
        element={
          <Private>
            <Layout>
              <CorporateProfile />
            </Layout>
          </Private>
        }
      />

    </Routes>
  );
}