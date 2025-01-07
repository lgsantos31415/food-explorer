import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions.js";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  ${({ $isVisible }) => $isVisible && "overflow-y: hidden;"}
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;

  padding: 164px 124px;

  @media (max-width: ${resolutions.medium}) {
    padding: 44px 24px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 260px;

  padding-inline: 100px;

  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;

  ${({ theme }) =>
    `background: linear-gradient(to bottom, ${theme.colors.gradient[200]});`}

  > img {
    position: absolute;
    left: -5%;
    bottom: -3.5%;
    height: 300px;
  }

  @media (max-width: ${resolutions.medium}) {
    height: 160px;
    padding-inline: 12px;

    > img {
      left: -6%;
      bottom: -2%;
      height: 120px;
    }
  }
`;

export const Right = styled.div`
  width: fit-content;
  height: fit-content;

  color: ${({ theme }) => theme.colors.light[300]};

  > h1 {
    ${({ theme }) => theme.font.poppins[500].medium}
  }
  > p {
    ${({ theme }) => theme.font.roboto.small.regular}
  }

  @media (max-width: ${resolutions.medium}) {
    width: 140px;

    > h1 {
      font-size: 18px;
      line-height: 140%;
    }
    > p {
      font-size: 12px;
      line-height: 140%;
    }
  }
`;

export const Row = styled.div`
  padding-bottom: 14px;
  width: 100%;
  height: fit-content;
  overflow-x: auto;

  display: flex;
  gap: 24px;

  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.dark[900]};
    border-radius: 99px;
  }

  @media (max-width: ${resolutions.medium}) {
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 64px;

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }

  @media (max-width: ${resolutions.medium}) {
    margin-top: 32px;
  }
`;
