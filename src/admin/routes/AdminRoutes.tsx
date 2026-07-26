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

      <Route
        path="/login"
        element={<Login />}
      />

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

    </Routes>
  );
}