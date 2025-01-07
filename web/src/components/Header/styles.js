import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions.js";

export const Container = styled.header`
  width: 100%;
  height: fit-content;

  padding: 22px 124px;

  background: ${({ theme }) => theme.colors.dark[600]};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  > a:nth-of-type(1) {
    display: none;
  }
  > a:nth-of-type(3) {
    display: none;
  }

  @media (max-width: ${resolutions.medium}) {
    padding: 22px 28px;

    > a:nth-of-type(1) {
      display: flex;
    }
    > div:nth-of-type(2) {
      display: none;
    }
    > button:nth-of-type(1) {
      display: none;
    }
    > a:nth-of-type(2) {
      display: none;
    }
    > a:nth-of-type(3) {
      display: flex;
      position: relative;

      > span {
        width: 21px;
        height: 21px;

        background: ${({ theme }) => theme.colors.tomato[100]};
        border-radius: 50%;

        position: absolute;
        top: -8px;
        right: -8px;

        display: grid;
        place-items: center;

        font-size: 13px;
        line-height: 13px;
        font-weight: 600;
      }
    }
  }
`;

export const Column = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: end;

  > span {
    ${({ theme }) => theme.font.roboto.smallest.regular}
    color: ${({ theme }) => theme.colors.cake[200]};
  }

  @media (max-width: ${resolutions.medium}) {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;
