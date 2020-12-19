import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../styles';

const Contain = styled.div`
  padding-bottom: 1em;
  text-align: center;
`;

const Name = styled.text`
  font-size: 6em;
  font-family: RobotoLight;
  color: ${colors.secondary};
`;

export const Joshua = () => (
  <Contain>
    <Name>joshua richard</Name>
  </Contain>
);
