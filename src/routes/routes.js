import { LoginPage, RegisterPage } from "../pages";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <Navigate to="/login" replace /> },
];

export default routes;
