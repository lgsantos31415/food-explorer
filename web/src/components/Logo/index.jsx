import { Container } from "./styles";

export default function Logo({ fontSize, color }) {
  return (
    <Container $fontSize={fontSize} $color={color}>
      <svg
        width="43"
        height="48"
        viewBox="0 0 43 48"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" />
      </svg>

      <h1>food explorer</h1>
    </Container>
  );
}
