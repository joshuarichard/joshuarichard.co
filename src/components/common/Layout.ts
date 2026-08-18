import styled from "styled-components";
import { BLACK } from "../../theme/colors";

export const Viewport = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${BLACK};

  @media (max-width: 768px) {
    height: auto;
    overflow: visible;
  }
`;

export const ScrollTrack = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100vw;
    overflow: visible;
  }
`;

export const Panel = styled.div`
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-shrink: 1;
  }
`;
