import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions";

export const Container = styled.div`
  width: 300px;
  min-width: 300px;
  min-height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 8px;
  padding: 24px;

  position: relative;

  background: ${({ theme }) => theme.colors.dark[300]};

  cursor: pointer;

  transition: all ease-in-out 500ms;

  opacity: ${({ $time }) => ($time ? "0.8" : "0.4")};

  @media (max-width: ${resolutions.medium}) {
    width: 285px;
    min-width: 285px;
    min-height: 390px;
    height: 390px;
  }
`;
