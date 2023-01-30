import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Layout/Main/Main";
import BillingPage from "../Components/Page/BillingPage/BillingPage";
import Home from "../Components/Page/Home/Home";
import Login from "../Components/Page/LoginPage/Login";
import Register from "../Components/Page/Resgister/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
  { path: "", element: <Layout></Layout> },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "home", element: <Home></Home> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "billingPage", element: <PrivateRoute><BillingPage></BillingPage></PrivateRoute> },
    ],
  },
]);

export default Routes;
