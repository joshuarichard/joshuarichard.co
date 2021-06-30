import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { createGlobalStyle } from 'styled-components';

import RobotoLight from '../fonts/Roboto/Roboto-Light.ttf';
import RobotoThin from '../fonts/Roboto/Roboto-Thin.ttf';
import { colors } from '../styles';
import InlineResume from './InlineResume';
import { resume } from '../data';
import Box from './Box';
import Home from './Home';

const GlobalStyle = createGlobalStyle<{ backgroundColor: string }>`
  body {
    color: ${colors.text.black};
    margin: 0;
    font-family: Roboto;
    font-size: 2rem;
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

const Contain = styled.div<{ fontColor?: string; fontFamily?: string; paddingBottom?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: static;
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFamily};
  padding-bottom: ${(props) => props.paddingBottom};
`;

const ContainChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const HomeFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.accent};
  height: 1.8rem;
`;

const App = () => {
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const { skillsArr } = resume;

  return (
    <Contain>
      <ContainChild>
        <Suspense fallback={<div style={{ backgroundColor: colors.primary }} />}>
          <GlobalStyle backgroundColor={colors.primary} />
          <Box content={<Home showProjects={showProjects} setShowProjects={setShowProjects} />} />
          <HomeFooter />
          <Box
            backgroundColor={colors.secondary}
            content={<InlineResume.SummaryEducation fontColor={colors.primary} />}
          />
          <Box content={<InlineResume.SummaryNow />} />
          {skillsArr.map((s, i) => (
            <Box
              key={i}
              backgroundColor={
                i % 3 === 0 ? colors.accent : (i + 1) % 2 === 0 ? colors.secondary : undefined
              }
              content={
                <Contain fontColor={i % 3 === 0 || (i + 1) % 2 === 0 ? colors.primary : undefined}>
                  <Contain fontFamily="RobotoLight" paddingBottom="1rem">
                    {s.title}
                  </Contain>
                  <Contain>{s.items}</Contain>
                </Contain>
              }
            />
          ))}
        </Suspense>
      </ContainChild>
    </Contain>
  );
};

export default App;
