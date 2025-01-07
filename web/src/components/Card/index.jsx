import { Container, Row, Row2, FilledHeart, Column } from "./styles";

import { useState } from "react";

import TextButton from "../TextButton";
import Button from "../Button";

import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { GoPencil, GoTrash } from "react-icons/go";

import { useAuth } from "../../hooks/auth";
import { usePreferences } from "../../hooks/preferences";
import { useNotification } from "../../hooks/notification";

import api from "../../services/api.js";

export default function Card({
  id,
  name,
  onClick,
  img,
  price,
  setRefresh,
  children,
}) {
  const { user } = useAuth();
  const { updateOrder, updateLiked, liked } = usePreferences();
  const { showNotification } = useNotification();

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

  async function handleDeletion(e) {
    e.stopPropagation();

    const userConfirm = window.confirm(
      "Tem certeza que deseja excluir? Essa ação é irreversível"
    );

    if (userConfirm) {
      try {
        await api.delete(`${api.defaults.baseURL}/food/${id}`);
        showNotification("Prato excluído com sucesso", true);
        setRefresh(true);
        setTimeout(() => setRefresh(false), 1000);
      } catch (error) {
        if (error.response) {
          showNotification(error.response.data.message);
        } else {
          showNotification("Não foi possível excluir o prato");
        }
      }
    }
  }

  return (
    <Container onClick={onClick}>
      {user.role === "admin" ? (
        <Column>
          <TextButton
            fontSize="20px"
            onClick={(e) => e.stopPropagation()}
            to={`/edit/${id}`}
          >
            <GoPencil />
          </TextButton>
          <TextButton fontSize="20px" onClick={(e) => handleDeletion(e)}>
            <GoTrash />
          </TextButton>
        </Column>
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
