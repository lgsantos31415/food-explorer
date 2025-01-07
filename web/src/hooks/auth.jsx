import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

import api from "../services/api";

import { useNotification } from "./notification";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  const { showNotification } = useNotification();

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/session",
        { email, password },
        { withCredentials: true }
      );

      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user });
    } catch (error) {
      if (error.response) {
        return showNotification(error.response.data.message);
      } else {
        return showNotification("Não foi possível fazer login");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
