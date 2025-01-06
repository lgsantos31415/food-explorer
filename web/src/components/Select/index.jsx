import { Container } from "./styles";

import { FiChevronDown } from "react-icons/fi";

export default function Select({ id, children, value, ...rest }) {
  return (
    <Container>
      <select name={id} id={id} value={value} {...rest}>
        {children}
      </select>
      <FiChevronDown />
    </Container>
  );
}
