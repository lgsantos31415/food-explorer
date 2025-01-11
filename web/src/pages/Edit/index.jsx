import { Container, Main, Row, Column, Ingredients, Img } from "./styles.js";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextButtonWithLink from "../../components/TextButtonWithLink";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import Ingredient from "../../components/Ingredient";

import { useNotification } from "../../hooks/notification.jsx";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FiChevronLeft, FiUpload, FiX } from "react-icons/fi";

import api from "../../services/api.js";

export default function Edit() {
  const { id } = useParams();

  let alterImage = false;

  async function fetchData() {
    const response = await api(`/food/show/${id}`);
    const food = response.data;

    setName(food.name);
    setCategory(food.category);
    setDescription(food.description);
    setPrice(food.price.toFixed(2));

    const ingredientNames = food.ingredients.map((item) => item.name);
    setIngredients(ingredientNames);

    setImage(food.image);
    setImagePreview(`${api.defaults.baseURL}/files/${food.image}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [price, setPrice] = useState("");
  const [imagePreview, setImagePreview] = useState();

  const [image, setImage] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

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

  async function handleUpdateFood() {
    if (!name) {
      return showNotification("Insira o nome do prato");
    }

    if (ingredients.length === 0) {
      return showNotification("Insira pelo menos um ingrediente");
    }

    if (!price) {
      return showNotification("Insira o preço");
    }

    if (!description) {
      return showNotification("Insira uma descrição");
    }

    if (!image && alterImage) {
      return showNotification("Insira uma imagem");
    }

    let response;

    if (alterImage) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("image", image);

      try {
        response = await api.post("/food/image", fileUploadForm);
      } catch (error) {
        console.error(error);
        if (error.response) {
          return showNotification(error.response.data.message);
        } else {
          return showNotification("Não foi possível fazer upload da imagem");
        }
      }
    }

    const food = {
      food_id: id,
      name,
      category,
      image: alterImage ? response.data.filename : image,
      description,
      price: parseFloat(price),
      ingredients,
    };

    try {
      const response = await api.put("/food", food);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      if (error.response) {
        return showNotification(error.response.data.message);
      } else {
        return showNotification("Não foi possível atualizar o prato");
      }
    }

    showNotification("Prato editado com sucesso", true);
    return navigate("/");
  }

  return (
    <Container>
      <Header />
      <Main>
        <TextButtonWithLink fontSize="24px" bold padding="0 12px 0 0" to="/">
          <FiChevronLeft />
          voltar
        </TextButtonWithLink>

        <h1>Editar prato</h1>

        <Row>
          {image !== null ? (
            <Img onClick={() => setImage(null)}>
              <img src={imagePreview} />
              <FiX />
            </Img>
          ) : (
            <Column>
              <label htmlFor="image">Imagem do prato</label>
              <label htmlFor="image">
                <p>
                  <FiUpload />
                  Selecione imagem
                </p>
                <input type="file" id="image" onChange={handleImage} />
              </label>
            </Column>
          )}
          <Column>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              placeholder="Ex.: Salada Ceaser"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Column>
          <Column>
            <label htmlFor="category">Categoria</label>
            <Select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Refeição">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Bebida">Bebida</option>
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
              id="price"
              type="number"
              placeholder="R$ 00,00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Column>
        </Row>

        <Row>
          <Column>
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              value={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Column>
        </Row>

        <Button fitContent paddingInline onClick={handleUpdateFood}>
          Salvar alterações
        </Button>
      </Main>
      <Footer />
    </Container>
  );
}
