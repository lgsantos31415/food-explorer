import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $fontSize }) => ($fontSize ? `calc(${$fontSize}px *.1)` : "24px")};
  flex-shrink: 0;

  > svg {
    fill: ${({ $color }) => $color || "#065E7C"};
    height: ${({ $fontSize }) =>
      $fontSize ? `calc(${$fontSize}px * 1.5)` : "60px"};
  }
  > h1 {
    ${({ theme }) => theme.font.roboto.giant.bold}
    color: ${({ $color, theme }) =>
      $color ? $color : theme.colors.light[100]};
    font-size: ${({ $fontSize }) => ($fontSize ? `${$fontSize}px` : "42px")};
  }
`;
