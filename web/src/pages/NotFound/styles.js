import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    ${({ theme }) => theme.font.roboto.giant.bold}
    font-size: 11.5rem;
    line-height: 11.5rem;
    color: ${({ theme }) => theme.colors.light[400]};
  }
  > p {
    ${({ theme }) => theme.font.roboto.bigger.regular}
    font-size: 1.7rem;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.light[100]};
    text-align: center;
    margin-bottom: 32px;
  }
`;
