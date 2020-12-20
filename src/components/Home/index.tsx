import React from 'react';
import styled from 'styled-components';
import { Photo, Menu, Contact, Joshua } from './MenuComponents';

const Contain = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  showProjects: boolean;
  setShowProjects: (show: boolean) => void;
};

const Home = ({ showProjects, setShowProjects }: Props) => {
  return (
    <Contain>
      <Photo />
      <Joshua />
      <Menu showProjects={showProjects} setShowProjects={setShowProjects} />
      <Contact />
    </Contain>
  );
};

export default Home;
