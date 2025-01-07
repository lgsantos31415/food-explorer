import { Container } from "./styles";

import Logo from "../Logo";

export default function Footer() {
  return (
    <Container>
      <Logo fontSize={1} color={({ theme }) => theme.colors.light[700]} />
      <span>© 2024 - Todos os direitos reservados.</span>
    </Container>
  );
}
