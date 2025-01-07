import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Show from "../pages/Show";
import Order from "../pages/Order";
import Favorites from "../pages/Favorites";

import NoAccess from "../pages/NoAccess";
import NotFound from "../pages/NotFound";

import api from "../services/api.js";

import { useEffect } from "react";

import { useAuth } from "../hooks/auth.jsx";

export default function AppRoutes() {
  const { signOut } = useAuth();

  useEffect(() => {
    api.get("/user/validated").catch(() => signOut());
  }, []);

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Show />} path="/show/:id" />
      <Route element={<Order />} path="/order" />
      <Route element={<Favorites />} path="/favorites" />

      <Route element={<NoAccess />} path="/create" />
      <Route element={<NoAccess />} path="/edit" />

      <Route element={<NotFound />} path="/*" />
    </Routes>
  );
}
