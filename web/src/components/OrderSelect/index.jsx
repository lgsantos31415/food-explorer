import { Container } from "./styles";

import { FiChevronDown } from "react-icons/fi";

import { useState } from "react";

import api from "../../services/api";

export default function OrderSelect({ id, orderId, children, value, ...rest }) {
  const [myStatus, setMyStatus] = useState(value);

  async function handleChange(value) {
    setMyStatus(value);

    try {
      await api.patch("/admin", {
        id: orderId,
        status: value,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container $orderId={orderId}>
      <select
        name={id}
        id={id}
        value={myStatus}
        onChange={(e) => handleChange(e.target.value)}
        {...rest}
      >
        {children}
      </select>
      <FiChevronDown />
    </Container>
  );
}
