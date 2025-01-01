import { Container } from "./styles";

export default function Button({
  icon: Icon,
  children,
  fitContent,
  paddingInline,
  ...rest
}) {
  return (
    <Container
      {...rest}
      $fitContent={fitContent}
      $paddingInline={paddingInline}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </Container>
  );
}
