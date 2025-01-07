import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $fontSize }) =>
    $fontSize ? `calc(${$fontSize}rem *.1)` : "1.5rem"};
  flex-shrink: 0;

  > svg {
    fill: ${({ $color }) => $color || "#065E7C"};
    height: ${({ $fontSize }) =>
      $fontSize ? `calc(${$fontSize}rem * 1.5)` : "3.75rem"};
  }
  > h1 {
    ${({ theme }) => theme.font.roboto.giant.bold}
    color: ${({ $color, theme }) =>
      $color ? $color : theme.colors.light[100]};
    font-size: ${({ $fontSize }) =>
      $fontSize ? `${$fontSize}rem` : "2.63rem"};
  }
`;
