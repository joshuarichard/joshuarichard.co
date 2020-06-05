import React from 'react';
import styled from 'styled-components';
import Content from './content/Content';

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: auto;
  margin: auto;
  padding: 10px;
`;

const Box = () => (
  <Contain>
    <Content/>
  </Contain>
);

export default Box;
