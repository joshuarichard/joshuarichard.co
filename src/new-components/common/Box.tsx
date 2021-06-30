import React from 'react';
import styled from 'styled-components';

type Props = {
  backgroundColor?: string;
  children?: React.ReactElement;
};

const Contain = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 50%;
  height: 33.333%;
  background-color: ${(props) => props.backgroundColor};
`;

export const Box = ({ backgroundColor, children }: Props) => {
  return <Contain backgroundColor={backgroundColor}>{children}</Contain>;
};
