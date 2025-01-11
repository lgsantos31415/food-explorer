import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions.js";

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

  > h1 {
    margin-block: 24px 32px;
    color: ${({ theme }) => theme.colors.light[300]};
    ${({ theme }) => theme.font.poppins[400].medium}
  }

  > div:nth-of-type(2) {
    display: flex;
    > div:nth-of-type(1) {
      width: 85%;
    }
    > div:nth-of-type(2) {
      width: 15%;
    }
    @media (max-width: ${resolutions.medium}) {
      > div:nth-of-type(1) {
        width: 100%;
      }
      > div:nth-of-type(2) {
        width: 100%;
      }
    }
  }

  > div + div {
    margin-top: 32px;
  }

  > button {
    margin: 32px 0 0 auto;
  }

  @media (max-width: ${resolutions.medium}) {
    padding: 32px;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${resolutions.medium}) {
    flex-direction: column;
  }
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
    position: relative;
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

    &:focus-within {
      outline: 2px solid white;
    }
    > input {
      pointer-events: none;
      width: 0;
      height: 0;
      position: absolute;
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
  padding: 12px;

  background: ${({ theme }) => theme.colors.dark[900]};
  border-radius: 8px;

  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: ${resolutions.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Img = styled.div`
  width: fit-content;

  position: relative;

  cursor: pointer;

  &:hover {
    > img {
      opacity: 0.5;
    }
    > svg {
      display: block;
    }
  }

  > img {
    transition: all ease-in-out 350ms;
    object-fit: contain;
    object-position: center;
    border-radius: 50%;
    width: 256px;
    height: 256px;
  }
  > svg {
    transition: all ease-in-out 350ms;
    display: none;
    position: absolute;
    top: 50%;
    font-size: 52px;
    color: ${({ theme }) => theme.colors.light[100]};
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
