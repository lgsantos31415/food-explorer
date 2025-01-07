import { createContext, useContext, useState } from "react";

const MenuContext = createContext({});

function MenuProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [variation, setVariation] = useState(1);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <MenuContext.Provider
      value={{ isVisible, variation, toggleVisibility, setVariation }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  return context;
}

export { MenuProvider, useMenu };
