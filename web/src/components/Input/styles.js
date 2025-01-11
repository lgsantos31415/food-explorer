import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions";

export const Container = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  gap: 16px;

  padding-inline: ${({ $paddingInline }) =>
    $paddingInline ? $paddingInline : "16px"};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.dark[900]};

  @media (max-width: ${resolutions.large}) {
    padding-inline: ${({ $paddingInline }) =>
      $paddingInline && `${$paddingInline.split("px")[0] / 2.5}px`};
  }

  &:focus-within {
    outline: 2px solid white;
  }

  > input {
    width: 100%;
    height: 100%;

    outline: none;

    background: none;
    border: none;

    ${({ theme }) => theme.font.roboto.small.regular}
    color: ${({ theme }) => theme.colors.light[100]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light[500]};
    }
  }
  > input::-webkit-inner-spin-button,
  > input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.light[400]};
  }
`;
