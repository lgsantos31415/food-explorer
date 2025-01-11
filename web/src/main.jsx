import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { NotificationProvider } from "./hooks/notification.jsx";
import { AuthProvider } from "./hooks/auth.jsx";
import { FavoritesProvider } from "./hooks/favorites.jsx";
import { OrdersProvider } from "./hooks/orders.jsx";
import { MenuProvider } from "./hooks/menu.jsx";
import { SearchProvider } from "./hooks/search.jsx";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import Notification from "./components/Notification";
import Menu from "./components/Menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <FavoritesProvider>
        <OrdersProvider>
          <BrowserRouter>
            <AuthProvider>
              <SearchProvider>
                <MenuProvider>
                  <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Notification />
                    <Menu />
                    <App />
                  </ThemeProvider>
                </MenuProvider>
              </SearchProvider>
            </AuthProvider>
          </BrowserRouter>
        </OrdersProvider>
      </FavoritesProvider>
    </NotificationProvider>
  </StrictMode>
);
