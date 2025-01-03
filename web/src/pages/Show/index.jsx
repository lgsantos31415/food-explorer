import {
  Container,
  Main,
  Row,
  Column,
  Ingredients,
  Row2,
  Row3,
  Placeholder,
} from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import TextButton from "../../components/TextButton";

import Circle from "../../assets/circle.svg";
import { FiMinus, FiPlus, FiChevronLeft } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import api from "../../services/api.js";

export default function Show() {
  const [name, setName] = useState("carregando...");
  const [description, setDescription] = useState("carregando...");
  const [price, setPrice] = useState("99,99");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState(["carregando..."]);

  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchData() {
    const response = await api.get(`/food/show/${id}`);
    const food = response.data;

    setName(food.name);
    setDescription(food.description);

    const parcel = String(parseFloat(food.price).toFixed(1)).split(".");
    setPrice(`${parcel[0].padStart(2, "0")},${parcel[1].padEnd(2, "0")}`);

    setImage(`http://localhost:3000/files/${food.image}`);

    setIngredients([]);

    const array = Array.from(food.ingredients);
    array.forEach((item) => {
      if (ingredients.length < array.length) {
        setIngredients((prevState) => [...prevState, item.name]);
      }
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

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
      <Header />
      <Main>
        <TextButton fontSize="24px" bold padding="0 16px 0 0" to="/">
          <FiChevronLeft />
          voltar
        </TextButton>
        <Row>
          {image !== null ? (
            <img src={image} alt={name} />
          ) : (
            <img src={Circle} alt={name} />
          )}

          <Column>
            <h1>{name}</h1>
            <p>{description}</p>
            <Ingredients>
              {ingredients.map((item, key) => {
                return <span key={key}>{item}</span>;
              })}
            </Ingredients>
            {user.role === "admin" ? (
              <Button
                fitContent
                paddingInline
                onClick={() => navigate(`/edit/${id}`)}
              >
                Editar prato
              </Button>
            ) : (
              <Row2>
                <Row3>
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
                </Row3>
                <Button fitContent paddingInline>
                  incluir ∙ R$ {price}
                </Button>
              </Row2>
            )}
          </Column>
        </Row>
      </Main>
      <Footer />
    </Container>
  );
}
