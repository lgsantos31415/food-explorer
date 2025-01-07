import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "./hooks/notification.jsx";
import { AuthProvider } from "./hooks/auth.jsx";
import { PreferencesProvider } from "./hooks/preferences.jsx";
import { MenuProvider } from "./hooks/menu.jsx";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import Notification from "./components/Notification";
import Menu from "./components/Menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <PreferencesProvider>
        <AuthProvider>
          <BrowserRouter>
            <MenuProvider>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Notification />
                <Menu />
                <App />
              </ThemeProvider>
            </MenuProvider>
          </BrowserRouter>
        </AuthProvider>
      </PreferencesProvider>
    </NotificationProvider>
  </StrictMode>
);
