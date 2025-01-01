import { Container, Banner, Main, Right, Row, Slider } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

import Img1 from "../../assets/img1.png";
import Spaghetti from "../../assets/spaghetti.png";

export default function Home() {
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
            {Array(10)
              .fill(null)
              .map((_, key) => {
                return (
                  <Card
                    key={key}
                    img={Spaghetti}
                    title="Spaguetti Gambe"
                    price={79.97}
                  >
                    Presunto de parma e rúcula em um pão com fermentação
                    natural.
                  </Card>
                );
              })}
          </Row>
        </Slider>
        <Slider>
          <h1>Sobremesas</h1>
          <Row>
            {Array(10)
              .fill(null)
              .map((_, key) => {
                return (
                  <Card
                    key={key}
                    img={Spaghetti}
                    title="Spaguetti Gambe"
                    price={79.97}
                  >
                    Presunto de parma e rúcula em um pão com fermentação
                    natural.
                  </Card>
                );
              })}
          </Row>
        </Slider>
        <Slider>
          <h1>Bebidas</h1>
          <Row>
            {Array(10)
              .fill(null)
              .map((_, key) => {
                return (
                  <Card
                    key={key}
                    img={Spaghetti}
                    title="Spaguetti Gambe"
                    price={79.97}
                  >
                    Presunto de parma e rúcula em um pão com fermentação
                    natural.
                  </Card>
                );
              })}
          </Row>
        </Slider>
      </Main>
      <Footer />
    </Container>
  );
}
