import {
  Container,
  Main,
  Row,
  Column,
  Ingredients,
  Row2,
  Row3,
} from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import TextButton from "../../components/TextButton";

import Spaghetti from "../../assets/spaghetti.png";
import { FiMinus, FiPlus, FiChevronLeft } from "react-icons/fi";

import { useState } from "react";

export default function Show() {
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
        <TextButton fontSize="24px" bold>
          <FiChevronLeft />
          voltar
        </TextButton>
        <Row>
          <img src={Spaghetti} />
          <Column>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <Ingredients>
              {Array(7)
                .fill("Alface")
                .map((item, key) => {
                  return <span key={key}>{item}</span>;
                })}
            </Ingredients>
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
                incluir ∙ R$ 25,00
              </Button>
            </Row2>
          </Column>
        </Row>
      </Main>
      <Footer />
    </Container>
  );
}
