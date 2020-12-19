import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../../styles';

const A = styled.a`
  color: ${colors.primary};
`;

type Props = {
  url: string;
  displayText: string;
};

const MenuA = ({ url, displayText }: Props) => {
  return (
    <A href={url} target="_blank" rel="noreferrer noopener">
      {displayText}
    </A>
  );
};

export const MenuContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.secondary};

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  margin: 1rem 1rem 1rem 1rem;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  }
`;

export const MenuItem = ({ url, displayText }: Props) => {
  return (
    <Item>
      <MenuA url={url} displayText={displayText} />
    </Item>
  );
};

export const MenuNav = styled.div`
  margin: 1rem 1rem 1rem 1rem;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  }

  color: ${colors.primary};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
