import CostumerRoutes from "./routes/costumer.routes";
import AdminRoutes from "./routes/admin.routes";
import AuthRoutes from "./routes/auth.routes";

import { useAuth } from "./hooks/auth";

export default function App() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case "admin":
        return <AdminRoutes />;
      case "costumer":
        return <CostumerRoutes />;
      default:
        return <CostumerRoutes />;
    }
  }

  return user ? <AccessRoute /> : <AuthRoutes />;
}
