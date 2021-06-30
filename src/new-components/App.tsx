import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { createGlobalStyle } from 'styled-components';

import GitHubLogo from '../svgs/github_logo.svg';
import LinkedInLogo from '../svgs/linkedin_logo.svg';
import AngelListLogo from '../svgs/angellist_logo.svg';

import RobotoLight from '../fonts/Roboto/Roboto-Light.ttf';
import RobotoThin from '../fonts/Roboto/Roboto-Thin.ttf';
import { colors, fonts } from '../styles';
import { resume } from '../data';
import { Box, TextBox, ImageBox } from './common';

ReactGA.initialize('UA-131070858-1');
ReactGA.pageview('/home');

const { skills, links } = resume;

const languages = skills.find((s) => s.title === 'languages')!;
const frameworks = skills.find((s) => s.title === 'frameworks')!;
const storage = skills.find((s) => s.title === 'storage')!;
const infra = skills.find((s) => s.title === 'infrastructure & tooling')!;

const images = [
  {
    src: GitHubLogo,
    alt: 'GitHub Logo',
    href: links.github,
  },
  {
    src: LinkedInLogo,
    alt: 'LinkedIn Logo',
    href: links.linkedin,
  },
  {
    src: AngelListLogo,
    alt: 'AngelList Logo',
    href: links.angellist,
  },
];

const GlobalStyle = createGlobalStyle<{ backgroundColor: string }>`
  body {
    color: ${colors.text.black};
    margin: 0;
    font-family: ${fonts.thin};
    font-size: 1.5rem;
    background: ${(props) => props.backgroundColor};
  }

  @font-face {
    font-family: ${fonts.light};
    src: url(${RobotoLight});
    font-display: swap;
  }

  @font-face {
    font-family: ${fonts.thin};
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

const Contain = styled.div<{ fontColor?: string; fontFamily?: string; paddingBottom?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  height: 100vh;
  color: ${(props) => props.fontColor};
  font-family: ${(props) => props.fontFamily};
  padding-bottom: ${(props) => props.paddingBottom};
`;

const App = () => {
  return (
    <Contain>
      <GlobalStyle backgroundColor={colors.primary} />
      <Box backgroundColor={colors.secondary} />
      <Box backgroundColor={colors.primary}>
        <TextBox header={'joshua richard'} />
      </Box>
      <Box backgroundColor={colors.primary}>
        <ImageBox images={images} />
      </Box>
      <Box backgroundColor={colors.tertiary} />
      <Box backgroundColor={colors.secondary} />
      <Box backgroundColor={colors.primary}>
        <TextBox body={'contact@joshuarichard.co'} />
      </Box>
      <Box backgroundColor={colors.primary} />
      <Box backgroundColor={colors.tertiary} />
      <Box backgroundColor={colors.secondary} />
      <Box backgroundColor={colors.primary}>
        <ImageBox
          height="12rem"
          images={[
            {
              src: '/music-timeline-screenshot.png',
              alt: 'Music Timeline Screenshot',
              href: 'http://music-timeline.s3.amazonaws.com/index.html',
            },
          ]}
        />
      </Box>
      <Box backgroundColor={colors.primary} />
      <Box backgroundColor={colors.tertiary} />
    </Contain>
  );
};

export default App;
