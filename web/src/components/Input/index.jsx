import { Container } from "./styles";

export default function Input({
  icon: Icon,
  id,
  placeholder,
  paddingInline,
  type,
  ...rest
}) {
  return (
    <Container {...rest} $paddingInline={paddingInline}>
      {Icon && <Icon />}
      <input id={id} type={type ? type : "text"} placeholder={placeholder} />
    </Container>
  );
}
