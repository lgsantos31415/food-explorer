import { Container } from "./styles";

import { FiChevronDown } from "react-icons/fi";

export default function Select({ id, children, ...rest }) {
  return (
    <Container>
      <select name={id} id={id} {...rest}>
        {children}
      </select>
      <FiChevronDown />
    </Container>
  );
}
