import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Show from "../pages/Show";
import Create from "../pages/Create";
import Edit from "../pages/Edit";

import NotFound from "../pages/NotFound";

import api from "../services/api.js";

import { useEffect } from "react";
import { useAuth } from "../hooks/auth.jsx";

export default function AdminRoutes() {
  const { signOut } = useAuth();

  useEffect(() => {
    api.get("/user/validated").catch(() => signOut());
  }, []);

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Show />} path="/show/:id" />
      <Route element={<Create />} path="/create" />
      <Route element={<Edit />} path="/edit/:id" />

      <Route element={<NotFound />} path="/*" />
    </Routes>
  );
}
