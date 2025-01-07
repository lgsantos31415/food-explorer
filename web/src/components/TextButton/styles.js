import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  padding: ${({ $padding }) => $padding && $padding};

  ${({ theme }) => theme.font.poppins[100].medium}
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.light[100])};
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : ".88rem")};

  cursor: pointer;
  user-select: none;
  transition: opacity ease-in-out 350ms;

  outline: none;

  > svg {
    ${({ $fontSize }) => $fontSize && `font-size: calc(${$fontSize}*1.5)`}
  }

  &:hover {
    opacity: 0.8;
  }
`;
