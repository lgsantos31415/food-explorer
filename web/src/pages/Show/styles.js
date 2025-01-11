import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;

  padding: 32px 128px;

  display: flex;
  gap: 42px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${resolutions.medium}) {
    padding: 32px;
    gap: 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  > img {
    width: 30%;
    border-radius: 50%;
  }

  @media (max-width: ${resolutions.medium}) {
    flex-direction: column;
    gap: 24px;

    > img {
      width: 264px;
      height: 264px;
    }
  }
`;

export const Column = styled.div`
  flex: 1;

  > h1 {
    color: ${({ theme }) => theme.colors.light[300]};
    ${({ theme }) => theme.font.poppins[500].medium}

    margin-bottom: 24px;
  }
  > p {
    color: ${({ theme }) => theme.colors.light[300]};
    ${({ theme }) => theme.font.poppins[300].regular}
  }

  @media (max-width: ${resolutions.medium}) {
    > h1 {
      text-align: center;
      margin-bottom: 6px;
    }
    > p {
      text-align: center;
    }
  }
`;

export const Ingredients = styled.div`
  width: 100%;
  height: fit-content;

  margin-block: 24px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  > span {
    width: fit-content;
    height: fit-content;
    padding: 4px 8px;

    border-radius: 6px;

    background: ${({ theme }) => theme.colors.dark[1000]};

    color: ${({ theme }) => theme.colors.light[100]};
    ${({ theme }) => theme.font.poppins[100].medium}
  }

  @media (max-width: ${resolutions.medium}) {
    justify-content: center;
    margin-block: 32px;
  }
`;

export const Row2 = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${resolutions.medium}) {
    gap: 24px;
    justify-content: center;
  }
`;

export const Row3 = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > a {
    width: 32px;
  }
  > span {
    color: ${({ theme }) => theme.colors.light[300]};
    ${({ theme }) => theme.font.roboto.big.bold}
  }
`;

export const Row4 = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 12px;

  @media (max-width: ${resolutions.medium}) {
    justify-content: center;
  }
`;
