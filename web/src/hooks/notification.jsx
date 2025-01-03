import { createContext, useContext, useState } from "react";

const NotificationContext = createContext({});

function NotificationProvider({ children }) {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);

  function showNotification(newMessage, isSuccess) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMessage(newMessage);
    setSuccess(isSuccess);
    setVisible(true);

    setTimeout(() => setVisible(false), 3000);
  }

  return (
    <NotificationContext.Provider
      value={{ message, success, visible, showNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

function useNotification() {
  const context = useContext(NotificationContext);
  return context;
}

export { NotificationProvider, useNotification };
