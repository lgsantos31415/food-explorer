import { Container, Banner, Main, Right, Row, Slider } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import LoadingCard from "../../components/LoadingCard";
import EmptyCard from "../../components/EmptyCard";

import Img1 from "../../assets/img1.png";
import api from "../../services/api.js";
import { useState, useEffect } from "react";
import { useNotification } from "../../hooks/notification.jsx";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const { showNotification } = useNotification();

  const [refeicoes, setRefeicoes] = useState(null);
  const [sobremesas, setSobremesas] = useState(null);
  const [bebidas, setBebidas] = useState(null);

  async function fetchData(category, set) {
    try {
      const res = await api.get(`/food/index/${category}`);
      set(res.data);
    } catch (error) {
      if (error.response) {
        showNotification(error.response.data.message);
      } else {
        console.log(error);
        showNotification("Algo deu errado");
      }
    }
  }

  useEffect(() => {
    fetchData("Refeição", setRefeicoes);
    fetchData("Sobremesa", setSobremesas);
    fetchData("Bebida", setBebidas);
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Banner>
          <img src={Img1} alt="Uma explosão de frutas e macaron" />
          <Right>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </Right>
        </Banner>
        <Slider>
          <h1>Refeições</h1>
          <Row>
            {refeicoes === null ? (
              Array(4)
                .fill(null)
                .map((_, key) => {
                  return <LoadingCard times={key} key={key} />;
                })
            ) : refeicoes === "" ? (
              <EmptyCard />
            ) : (
              refeicoes.map((food, key) => {
                return (
                  <Card
                    key={key}
                    id={food.id}
                    img={food.image}
                    name={food.name}
                    price={food.price}
                    onClick={() => navigate(`/show/${food.id}`)}
                  >
                    {food.description}
                  </Card>
                );
              })
            )}
          </Row>
        </Slider>
        <Slider>
          <h1>Sobremesas</h1>
          <Row>
            {sobremesas === null ? (
              Array(4)
                .fill(null)
                .map((_, key) => {
                  return <LoadingCard times={key} key={key} />;
                })
            ) : sobremesas === "" ? (
              <EmptyCard />
            ) : (
              sobremesas.map((food, key) => {
                return (
                  <Card
                    key={key}
                    img={food.image}
                    title={food.title}
                    price={food.prince}
                  >
                    {food.description}
                  </Card>
                );
              })
            )}
          </Row>
        </Slider>
        <Slider>
          <h1>Bebidas</h1>
          <Row>
            {bebidas === null ? (
              Array(4)
                .fill(null)
                .map((_, key) => {
                  return <LoadingCard times={key} key={key} />;
                })
            ) : bebidas === "" ? (
              <EmptyCard />
            ) : (
              bebidas.map((food, key) => {
                return (
                  <Card
                    key={key}
                    img={food.image}
                    title={food.title}
                    price={food.prince}
                  >
                    {food.description}
                  </Card>
                );
              })
            )}
          </Row>
        </Slider>
      </Main>
      <Footer />
    </Container>
  );
}
