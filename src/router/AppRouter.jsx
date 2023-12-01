import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes";
import Layout from "../components/layout/Layout";
import LoginContainer from "../components/pages/login/LoginContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";
import DashboardContainer from "../components/pages/dashboard/DashboardContainer";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Route>

      <Route path="*" element={<h1>404 no encontrada</h1>} />
    </Routes>
  );
};

export default AppRouter;
