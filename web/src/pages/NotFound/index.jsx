import { Container } from "./styles";

import Button from "../../components/Button";

import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>404</h1>
      <p>
        Você andou tanto...
        <br /> que chegou no fim do universo
      </p>
      <Button fitContent paddingInline onClick={() => navigate("/")}>
        Voltar para casa
      </Button>
    </Container>
  );
}
