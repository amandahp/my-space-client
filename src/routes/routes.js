import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage, MySpacePage, ProfilePage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import React from 'react'

const routes = [
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/my-space",
    element: (
      <PrivateRoute>
        <MySpacePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <Navigate to="/login" replace /> },
];

export default routes;
