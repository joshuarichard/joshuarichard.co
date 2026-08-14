import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    background: #0a0a0a;
    color: #e5e5e5;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Name>Joshua Richard</Name>
      </Container>
    </>
  );
}

export default App;
