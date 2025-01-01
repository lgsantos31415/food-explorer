import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  ${({ theme }) => theme.font.poppins[100].medium}
  color: ${({ theme }) => theme.colors.light[100]};
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "14px")};

  cursor: pointer;
  transition: all ease-in-out 350ms;

  > svg {
    ${({ $fontSize }) => $fontSize && `font-size: calc(${$fontSize}*1.5)`}
  }

  &:hover {
    opacity: 0.8;
  }
`;
