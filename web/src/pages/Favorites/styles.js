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
  flex-direction: column;
  gap: 32px;

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }

  @media (max-width: ${resolutions.medium}) {
    padding: 32px;

    flex-direction: column;
  }
`;

export const Items = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: ${resolutions.medium}) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Favorite = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 12px;

  background: ${({ theme }) => theme.colors.dark[500]};
  padding: 12px 32px;
  border-radius: 6px;

  > img {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }

  @media (max-width: ${resolutions.medium}) {
    width: 100%;
    padding: 10px;
    gap: 10px;

    > img {
      width: 68px;
      height: 68px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    ${({ theme }) => theme.font.poppins[200].medium}
    color: ${({ theme }) => theme.colors.light[300]}
  }
`;
