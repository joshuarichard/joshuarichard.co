import { createGlobalStyle } from "styled-components";
import { BLACK } from "../../theme/colors";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow: hidden;
    height: 100%;
    background: ${BLACK};

    @media (max-width: 768px) {
      overflow: auto;
      height: auto;
    }
  }

  #root {
    height: 100vh;
    overflow: hidden;

    @media (max-width: 768px) {
      height: auto;
      overflow: visible;
    }
  }
`;
