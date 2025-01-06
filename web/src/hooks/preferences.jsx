import { createContext, useContext, useEffect, useState } from "react";

export const PreferencesContext = createContext({});

function PreferencesProvider({ children }) {
  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
  });
  const [quantity, setQuantity] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [liked, setLiked] = useState(() => {
    return JSON.parse(localStorage.getItem("@foodexplorer:liked")) || [];
  });

  function updateOrder(id, quantityToAdd) {
    const updatedOrder = [...order];
    const previousIndex = updatedOrder.findIndex(
      (orderItem) => orderItem.id === id
    );

    if (previousIndex !== -1) {
      updatedOrder[previousIndex].quantity += quantityToAdd;
    } else {
      updatedOrder.push({ id, quantity: quantityToAdd });
    }

    localStorage.setItem("@foodexplorer:order", JSON.stringify(updatedOrder));
    setOrder(updatedOrder);

    setTimeout(() => {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 1000);
    }, 750);
  }

  function removeItem(id) {
    const updatedOrder = [...order];
    const filteredArray = updatedOrder.filter((item) => item.id !== id);

    localStorage.setItem("@foodexplorer:order", JSON.stringify(filteredArray));
    setOrder(filteredArray);
  }

  function calculateQuantity() {
    if (order.length > 0) {
      const total = order.reduce((count, item) => count + item.quantity, 0);
      setQuantity(total);
    } else {
      setQuantity(0);
    }
  }

  function updateLiked(id) {
    let myLiked = [...liked];

    if (myLiked.includes(id)) {
      myLiked = myLiked.filter((item) => item !== id);
    } else {
      myLiked.push(id);
    }

    localStorage.setItem("@foodexplorer:liked", JSON.stringify(myLiked));
    setLiked(myLiked);
  }

  useEffect(() => calculateQuantity(), [order]);

  return (
    <PreferencesContext.Provider
      value={{
        order,
        quantity,
        animation,
        liked,
        updateOrder,
        updateLiked,
        removeItem,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

function usePreferences() {
  const context = useContext(PreferencesContext);
  return context;
}

export { PreferencesProvider, usePreferences };
