import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 8px;

  position: relative;

  > select {
    width: 100%;
    height: 100%;
    padding-inline: 16px;

    outline: none;

    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.dark[900]};

    color: ${({ theme }) => theme.colors.light[100]};
    ${({ theme }) => theme.font.roboto.small.regular}

    appearance: none;

    cursor: pointer;
  }
  > svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 22px;
    color: ${({ theme }) => theme.colors.light[100]};
    pointer-events: none;
  }
`;
