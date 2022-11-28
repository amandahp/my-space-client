import { Route } from "react-router-dom";
import routes from "./routes";

const buildRoutes = () => {
  return routes.map((route, index) => {
    return <Route path={route.path} element={route.element} />;
  });
};

export default buildRoutes;
