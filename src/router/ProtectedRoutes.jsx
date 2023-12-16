import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isLogged, accessToken, user } = useSelector((state) => state.auth);

  return isLogged && accessToken && user.rol == "admin" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
