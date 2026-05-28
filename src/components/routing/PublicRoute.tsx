import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../store/users";

const PublicRoute = () => {
  const userId = useUserStore((state) => state.id);

  if (userId) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PublicRoute;
