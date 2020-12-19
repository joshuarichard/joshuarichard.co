import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: auto;
  margin: auto;
  padding: 10px;
`;

type Props = {
  showProjects: boolean;
  setShowProjects: (show: boolean) => void;
};

const Box = ({ showProjects, setShowProjects }: Props) => {
  return (
    <Contain>
      <Content showProjects={showProjects} setShowProjects={setShowProjects} />
    </Contain>
  );
};

export default Box;
