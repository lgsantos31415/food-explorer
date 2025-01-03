import { Container, Row, Row2, FilledHeart } from "./styles";

import { useState } from "react";

import TextButton from "../TextButton";
import Button from "../Button";

import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { GoPencil } from "react-icons/go";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export default function Card({ id, name, onClick, img, price, children }) {
  const navigate = useNavigate();

  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

  const parcel = String(parseFloat(price).toFixed(1)).split(".");
  const firstParcel = parcel[0].padStart(2, "0");
  const secondParcel = parcel[1].padEnd(2, "0");
  price = `${firstParcel},${secondParcel}`;

  const [liked, setLiked] = useState(false);

  function handleNumberOfItems(e, difference) {
    e.preventDefault();
    e.stopPropagation();

    if (difference === 1) {
      const newValue = quantity + 1;

      if (newValue < 100) {
        setQuantity(newValue);
      }
    } else {
      const newValue = quantity - 1;

      if (newValue >= 1) {
        setQuantity(newValue);
      }
    }
  }

  return (
    <Container onClick={onClick}>
      {user.role === "admin" ? (
        <TextButton
          fontSize="24px"
          onClick={(e) => e.stopPropagation()}
          to={`/edit/${id}`}
        >
          <GoPencil />
        </TextButton>
      ) : (
        <TextButton
          fontSize="24px"
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
        >
          {liked ? <FilledHeart /> : <FiHeart />}
        </TextButton>
      )}
      <img src={`http://localhost:3000/files/${img}`} alt={name} />
      <h1>{name}</h1>
      <p>{children}</p>
      <span>R$ {String(price).replace(".", ",")}</span>

      {user.role !== "admin" && (
        <Row>
          <Row2>
            <TextButton
              fontSize="24px"
              onClick={(e) => handleNumberOfItems(e, -1)}
            >
              <FiMinus />
            </TextButton>
            <span>{String(quantity).padStart(2, "0")}</span>
            <TextButton
              fontSize="24px"
              onClick={(e) => handleNumberOfItems(e, 1)}
            >
              <FiPlus />
            </TextButton>
          </Row2>
          <Button fitContent paddingInline onClick={(e) => e.stopPropagation()}>
            Incluir
          </Button>
        </Row>
      )}
    </Container>
  );
}
