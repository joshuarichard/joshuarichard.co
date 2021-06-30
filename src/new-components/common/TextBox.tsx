import React from 'react';
import styled from 'styled-components';

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem;
`;

const Header = styled.div<{ fontColor?: string }>`
  font-size: 2rem;
  color: ${(props) => props.fontColor};
`;

const Body = styled.div<{ fontColor?: string }>`
  text-align: center;
  color: ${(props) => props.fontColor};
`;

type Props = {
  header?: string;
  body?: string;
  fontColor?: string;
};

export const TextBox = ({ header, body, fontColor }: Props) => {
  return (
    <Contain>
      <Header fontColor={fontColor}>{header}</Header>
      <Body fontColor={fontColor}>{body}</Body>
    </Contain>
  );
};
