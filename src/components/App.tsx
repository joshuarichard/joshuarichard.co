import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { createGlobalStyle } from 'styled-components';

import RobotoLight from '../fonts/Roboto/Roboto-Light.ttf';
import RobotoThin from '../fonts/Roboto/Roboto-Thin.ttf';

import { colors } from '../styles';

const Box = React.lazy(() => import('./box'));

const GlobalStyle = createGlobalStyle<{ backgroundColor: string }>`
  body {
    color: ${colors.text.black};
    margin: 0;
    font-family: Roboto;
    background: ${(props) => props.backgroundColor};
  }

  @font-face {
    font-family: RobotoLight;
    src: url(${RobotoLight});
    font-display: swap;
  }

  @font-face {
    font-family: Roboto;
    src: url(${RobotoThin});
    font-display: swap;
  }

  a, a:link, a:visited, a:active, a:visited:hover {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

ReactGA.initialize('UA-131070858-1');
ReactGA.pageview('/home');

const Contain = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const App = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);

  return (
    <Contain>
      <Suspense fallback={<div style={{ backgroundColor: colors.primary }} />}>
        <GlobalStyle backgroundColor={colors.primary} />
        <Box showProjects={showProjects} setShowProjects={setShowProjects} />
      </Suspense>
    </Contain>
  );
};

export default App;
