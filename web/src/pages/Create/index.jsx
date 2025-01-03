import { Container, Main, Row, Column, Ingredients } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextButton from "../../components/TextButton";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import Ingredient from "../../components/Ingredient";

import { useNotification } from "../../hooks/notification";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiChevronLeft, FiUpload } from "react-icons/fi";

export default function Create() {
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("refeicoes");
  const [price, setPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleNewIngredient() {
    if (newIngredient != "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(e) {
    const array = ingredients.filter((item) => item != e);
    setIngredients(array);
  }

  function handleNewFood() {
    if (!name) {
      return showNotification("Insira o nome do prato");
    }

    if (ingredients.length == 0) {
      return showNotification("Insira pelo menos um ingrediente");
    }

    if (!price) {
      return showNotification("Insira o preço");
    }

    if (!description) {
      return showNotification("Insira uma descrição");
    }
  }

  return (
    <Container>
      <Header />
      <Main>
        <TextButton fontSize="24px" bold padding="0 12px 0 0" to="/">
          <FiChevronLeft />
          voltar
        </TextButton>

        <h1>Adicionar prato</h1>

        <Row>
          <Column>
            <label htmlFor="image">Imagem do prato</label>
            <label htmlFor="image">
              <p>
                <FiUpload />
                Selecione imagem
              </p>
              <input type="file" id="image" />
            </label>
          </Column>
          <Column>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              placeholder="Ex.: Salada Ceaser"
              onChange={(e) => setName(e.target.value)}
            />
          </Column>
          <Column>
            <label htmlFor="category">Categoria</label>
            <Select id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="refeicoes">Refeição</option>
              <option value="sobremesas">Sobremesa</option>
              <option value="bebidas">Bebida</option>
            </Select>
          </Column>
        </Row>

        <Row>
          <Column>
            <label htmlFor="addIngredients">Ingredientes</label>
            <Ingredients>
              {ingredients.map((item, key) => {
                return (
                  <Ingredient
                    value={item}
                    key={key}
                    onClick={() => handleRemoveIngredient(item)}
                  />
                );
              })}
              <Ingredient
                isNew
                id="addIngredients"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleNewIngredient}
              />
            </Ingredients>
          </Column>
          <Column>
            <label htmlFor="price">Preço</label>
            <Input
              type="number"
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Column>
        </Row>

        <Row>
          <Column>
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Column>
        </Row>

        <Button fitContent paddingInline onClick={handleNewFood}>
          Adicionar
        </Button>
      </Main>
      <Footer />
    </Container>
  );
}
