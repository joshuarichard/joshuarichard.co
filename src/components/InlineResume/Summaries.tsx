import React from 'react';
import styled from 'styled-components';

import { resume } from '../../data';

const Contain = styled.div<{ fontColor?: string }>`
  margin: 20rem;
  color: ${(props) => props.fontColor};

  // why doesn't the below work?
  @media (max-width: 400px) {
    margin: 10rem;
    background-color: red;
  }
`;

type SummaryProps = {
  fontColor?: string;
};

export const SummaryEducation = ({ fontColor }: SummaryProps) => {
  return <Contain fontColor={fontColor}>{resume.summary.education}</Contain>;
};

export const SummaryNow = ({ fontColor }: SummaryProps) => {
  return <Contain fontColor={fontColor}>{resume.summary.now}</Contain>;
};
