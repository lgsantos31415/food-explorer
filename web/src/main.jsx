import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "./hooks/notification.jsx";
import { AuthProvider } from "./hooks/auth.jsx";
import { PreferencesProvider } from "./hooks/preferences.jsx";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Notification from "./components/Notification";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <PreferencesProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Notification />
            <App />
          </ThemeProvider>
        </AuthProvider>
      </PreferencesProvider>
    </NotificationProvider>
  </StrictMode>
);
