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
  color: ${({ theme }) => theme.colors.light[100]};
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "14px")};

  cursor: pointer;
  user-select: none;
  transition: opacity ease-in-out 350ms;

  > svg {
    ${({ $fontSize }) => $fontSize && `font-size: calc(${$fontSize}*1.5)`}
  }

  &:focus {
    outline: 2px solid white;
    border-radius: 4px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
