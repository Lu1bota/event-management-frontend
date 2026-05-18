import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../store/users";

const ProtectedRoute = () => {
  const userId = useUserStore((state) => state.id);

  if (!userId) return <Navigate to="/sign-in" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
