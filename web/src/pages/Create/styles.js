import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;

  padding: 42px 124px 100px;

  > h1 {
    margin-block: 24px 32px;
    color: ${({ theme }) => theme.colors.light[300]};
    ${({ theme }) => theme.font.poppins[400].medium}
  }

  > div:nth-of-type(2) {
    display: flex;
    > div:nth-of-type(1) {
      width: 80%;
    }
    > div:nth-of-type(2) {
      width: 20%;
    }
  }

  > div + div {
    margin-top: 32px;
  }

  > div:nth-of-type(4) {
    margin-left: auto;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

export const Column = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  > label:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.light[400]};
    ${({ theme }) => theme.font.roboto.small.regular}
  }
  > label:nth-of-type(2) {
    width: 100%;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    padding-inline: ${({ $paddingInline }) =>
      $paddingInline ? $paddingInline : "16px"};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.dark[900]};

    cursor: pointer;

    > input {
      display: none;
    }
    > p {
      ${({ theme }) => theme.font.poppins[100].medium}
      color: ${({ theme }) => theme.colors.light[100]};

      display: flex;
      gap: 8px;

      > svg {
        font-size: 24px;
      }
    }
  }
`;

export const Ingredients = styled.div`
  width: 100%;
  min-height: 48px;

  background: ${({ theme }) => theme.colors.dark[900]};
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;

  padding-inline: 12px;
`;
