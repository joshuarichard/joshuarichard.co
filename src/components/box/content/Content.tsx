import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Contact from './Contact';
import Joshua from './Joshua';

const Contain = styled.div`
  margin: 10px;
`;

const Content = () => (
  <Contain>
    <Joshua/>
    <div>
      <Menu/>
      <Contact/>
    </div>
  </Contain>
);

export default Content;
