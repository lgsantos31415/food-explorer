import styled from "styled-components";

import { FiHeart } from "react-icons/fi";

export const Container = styled.div`
  max-width: 290px;
  min-height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 8px;
  padding: 24px;

  position: relative;

  background: ${({ theme }) => theme.colors.dark[300]};

  cursor: pointer;

  > a:nth-of-type(1) {
    top: 16px;
    right: 16px;

    color: ${({ theme }) => theme.colors.light[300]};
    position: absolute;

    z-index: 2;
  }
  > img {
    border-radius: 50%;
    width: 164px;
  }
  > h1 {
    ${({ theme }) => theme.font.poppins[300].bold}
    color: ${({ theme }) => theme.colors.light[300]};
  }
  > p {
    word-break: normal;
    text-align: center;
    ${({ theme }) => theme.font.roboto.smaller.regular}
    color: ${({ theme }) => theme.colors.light[400]};
  }
  > span {
    ${({ theme }) => theme.font.roboto.biggest.regular}
    color: ${({ theme }) => theme.colors.cake[200]};
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const Row2 = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 6px;

  > a {
    width: 24px;
  }
  > span {
    width: fit-content;
    color: ${({ theme }) => theme.colors.light[300]};
    ${({ theme }) => theme.font.roboto.big.bold};
  }
`;

export const FilledHeart = styled(FiHeart)`
  fill: ${({ theme }) => theme.colors.tomato[200]};
  color: ${({ theme }) => theme.colors.tomato[200]};
`;
