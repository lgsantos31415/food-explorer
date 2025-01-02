import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/app.routes";
import AuthRoutes from "./routes/auth.routes";

import { useAuth } from "./hooks/auth";

export default function App() {
  const { user } = useAuth();

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
