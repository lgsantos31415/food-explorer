import { Container, Row, Row2, FilledHeart } from "./styles";

import { useState } from "react";

import TextButton from "../TextButton";
import Button from "../Button";

import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { GoPencil } from "react-icons/go";

import { useAuth } from "../../hooks/auth";
import { usePreferences } from "../../hooks/preferences";

import api from "../../services/api.js";

export default function Card({ id, name, onClick, img, price, children }) {
  const { user } = useAuth();
  const { updateOrder, updateLiked, liked } = usePreferences();
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const parcel = String(parseFloat(price).toFixed(2)).split(".");
  const firstParcel = parcel[0].padStart(2, "0");
  const secondParcel = parcel[1].padEnd(2, "0");
  price = `${firstParcel},${secondParcel}`;

  function handleNumberOfItems(e, difference) {
    e.preventDefault();
    e.stopPropagation();

    if (difference === 1) {
      const newValue = quantityToAdd + 1;

      if (newValue < 100) {
        setQuantityToAdd(newValue);
      }
    } else {
      const newValue = quantityToAdd - 1;

      if (newValue >= 1) {
        setQuantityToAdd(newValue);
      }
    }
  }

  function handleInclusition(e) {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
    updateOrder(id, quantityToAdd);
    setQuantityToAdd(1);
  }

  return (
    <Container onClick={onClick}>
      {user.role === "admin" ? (
        <TextButton
          fontSize="20px"
          onClick={(e) => e.stopPropagation()}
          to={`/edit/${id}`}
        >
          <GoPencil />
        </TextButton>
      ) : (
        <TextButton
          fontSize="20px"
          onClick={(e) => {
            e.stopPropagation();
            updateLiked(id);
          }}
        >
          {liked.includes(id) ? <FilledHeart /> : <FiHeart />}
        </TextButton>
      )}
      <img src={`${api.defaults.baseURL}/files/${img}`} alt={name} />
      <h1>{name}</h1>
      <p>{children}</p>
      <span>R$ {String(price).replace(".", ",")}</span>

      {user.role !== "admin" && (
        <Row>
          <Row2>
            <TextButton
              fontSize="20px"
              onClick={(e) => handleNumberOfItems(e, -1)}
            >
              <FiMinus />
            </TextButton>
            <span>{String(quantityToAdd).padStart(2, "0")}</span>
            <TextButton
              fontSize="20px"
              onClick={(e) => handleNumberOfItems(e, 1)}
            >
              <FiPlus />
            </TextButton>
          </Row2>
          <Button
            fitContent
            paddingInline
            onClick={(e) => handleInclusition(e)}
          >
            Incluir
          </Button>
        </Row>
      )}
    </Container>
  );
}
