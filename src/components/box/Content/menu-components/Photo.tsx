import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../styles';

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: drop-shadow(0 0 0.15rem ${colors.accent});
`;

export const Photo = () => <Img src="./josh.png" alt="Joshua Richard Headshot" />;
