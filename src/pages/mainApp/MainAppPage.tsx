import { useAuthStore } from "../../hooks/useAuthStore";
import { Navigate } from "react-router-dom";

export const MainAppPage = () => {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>
    <h1>DASHBOARD PRINCIPAL</h1>
  </>;
};
