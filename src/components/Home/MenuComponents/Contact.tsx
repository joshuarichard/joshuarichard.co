import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles';

const Contain = styled.div`
  font-size: 2rem;
  margin: 1rem auto 0;
  display: flex;
  justify-content: center;
`;

const A = styled.a`
  color: ${colors.secondary};
`;

export const Contact = () => (
  <Contain>
    <div>
      <A href="mailto:contact@joshuarichard.co">contact@joshuarichard.co</A>
    </div>
  </Contain>
);
