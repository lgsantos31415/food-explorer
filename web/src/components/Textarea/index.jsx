import { Container } from "./styles";

export default function Textarea({ placeholder, id, ...rest }) {
  return <Container placeholder={placeholder} id={id} {...rest} />;
}
