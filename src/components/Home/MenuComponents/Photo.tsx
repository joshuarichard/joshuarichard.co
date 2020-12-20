import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Photo = () => <Img src="./josh.png" alt="Joshua Richard Headshot" />;
