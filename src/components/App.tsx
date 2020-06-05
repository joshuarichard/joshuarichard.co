import React, { Component } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Box from './box';
import { createGlobalStyle } from 'styled-components';
import RobotoItalic from '../fonts/Roboto/Roboto-ThinItalic.ttf';
import RobotoThin from '../fonts/Roboto/Roboto-Thin.ttf';

const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    margin: 0;
    font-family: Roboto;
    background: #d2d2d2;
    background: -webkit-linear-gradient(to right, #FFFFFF, #d2d2d2);
    background: linear-gradient(to right, #FFFFFF, #d2d2d2);
  }

  @font-face {
    font-family: RobotoItalic;
    src: url(${RobotoItalic});
  }

  @font-face {
    font-family: Roboto;
    src: url(${RobotoThin});
  }

  a, a:link, a:visited, a:active, a:visited:hover {
    color: black !important;
    text-decoration: none;
  }

  a:hover {
    text-decoration: overline;
  }
`;

ReactGA.initialize('UA-131070858-1');
ReactGA.pageview('/home');

const Contain = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <Contain>
        <GlobalStyle/>
        <Box/>
      </Contain>
    );
  }
};

export default App;
