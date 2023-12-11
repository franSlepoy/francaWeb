import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isLogged, accessToken } = useSelector((state) => state.auth);

  return isLogged && accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
