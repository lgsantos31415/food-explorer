import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  > p {
    width: 250px;
    color: white;

    ${({ theme }) => theme.font.poppins["100"].medium}
  }

  @media (max-width: ${resolutions.medium}) {
    flex-direction: column;
    justify-content: center;
    gap: 64px;
  }
`;

export const Form = styled.form`
  width: 65%;
  height: fit-content;
  padding: 64px;

  background: ${({ theme }) => theme.colors.dark[700]};
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium}
    color: ${({ theme }) => theme.colors.light[100]};

    margin-bottom: 32px;
  }
  > div + div {
    margin-top: 32px;
  }
  > button {
    margin-block: 32px;
  }

  @media (max-width: ${resolutions.medium}) {
    min-width: 100%;
    background: none;
    padding: 0 46px;

    > h1 {
      display: none;
    }
  }
`;

export const Column = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    ${({ theme }) => theme.font.roboto.small.regular}
    color: ${({ theme }) => theme.colors.light[400]};
  }
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;

  display: grid;
  place-items: center;

  @media (max-width: ${resolutions.medium}) {
    flex: 0;
  }
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;

  display: grid;
  place-items: center;

  @media (max-width: ${resolutions.medium}) {
    flex: 0;
  }
`;
