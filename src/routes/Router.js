import { Route } from "react-router-dom";
import routes from "./routes";
import React from 'react'

const buildRoutes = () => {
  return routes.map((route, index) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

export default buildRoutes;
