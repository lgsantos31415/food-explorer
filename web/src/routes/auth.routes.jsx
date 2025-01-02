import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route element={<SignIn />} path="/" />
      <Route element={<SignUp />} path="/signup" />
    </Routes>
  );
}
