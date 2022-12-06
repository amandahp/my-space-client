import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage, MySpacePage, ProfilePage } from "../pages";

const routes = [
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/my-space", element: <MySpacePage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "*", element: <Navigate to="/login" replace /> },
];

export default routes;
