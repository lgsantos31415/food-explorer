import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SignIn />} path="/" />
        <Route element={<SignUp />} path="/signin" />
        <Route element={<Home />} path="/home" />
        <Route element={<Show />} path="/show" />
        <Route element={<Create />} path="/create" />
        <Route element={<Edit />} path="/edit" />
      </Routes>
    </Router>
  );
}
