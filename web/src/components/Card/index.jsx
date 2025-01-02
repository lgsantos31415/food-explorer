import { Container, Row, Row2, FilledHeart } from "./styles";

import { useState } from "react";

import TextButton from "../TextButton";
import Button from "../Button";

import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { GoPencil } from "react-icons/go";

import { useAuth } from "../../hooks/auth";

export default function Card({ title, img, price, children }) {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

  const parcel = String(price).split(".");
  price = `${parcel[0].padStart(2, "0")},${parcel[1].padEnd(2, "0")}`;

  const [liked, setLiked] = useState(false);

  function handleNumberOfItems(e, difference) {
    e.preventDefault();

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
    <Container>
      {user.role === "admin" ? (
        <TextButton fontSize="24px">
          <GoPencil />
        </TextButton>
      ) : (
        <TextButton fontSize="24px" onClick={() => setLiked(!liked)}>
          {liked ? <FilledHeart /> : <FiHeart />}
        </TextButton>
      )}
      <img src={img} alt={title} />
      <h1>{title}</h1>
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
          <Button fitContent paddingInline>
            Incluir
          </Button>
        </Row>
      )}
    </Container>
  );
}
