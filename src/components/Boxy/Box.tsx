import React from 'react';
import styled from 'styled-components';

const Contain = styled.div<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: calc(100vh - 3rem);
  margin: auto;
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

type Props = {
  content: JSX.Element;
  backgroundColor?: string;
};

const Box = ({ content, backgroundColor }: Props) => {
  return <Contain backgroundColor={backgroundColor}>{content}</Contain>;
};

export default Box;
