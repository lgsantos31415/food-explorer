import { Container } from "./styles";

export default function Input({
  icon: Icon,
  id,
  placeholder,
  paddingInline,
  onChange,
  type,
  value,
  ...rest
}) {
  return (
    <Container {...rest} $paddingInline={paddingInline}>
      {Icon && <Icon />}
      <input
        id={id}
        type={type ? type : "text"}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </Container>
  );
}
