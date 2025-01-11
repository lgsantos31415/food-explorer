import { createContext, useContext, useEffect, useState } from "react";

export const OrdersContext = createContext({});

function OrdersProvider({ children }) {
  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
  });
  const [quantity, setQuantity] = useState(0);
  const [animation, setAnimation] = useState(false);

  function updateOrder(id, quantityToAdd) {
    id = Number(id);

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

  function resetOrder() {
    localStorage.removeItem("@foodexplorer:order");
    setOrder({});
  }

  useEffect(() => calculateQuantity(), [order]);

  return (
    <OrdersContext.Provider
      value={{
        order,
        quantity,
        animation,
        updateOrder,
        removeItem,
        resetOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

function useOrders() {
  const context = useContext(OrdersContext);
  return context;
}

export { OrdersProvider, useOrders };
