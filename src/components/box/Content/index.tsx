import React from 'react';
import styled from 'styled-components';
import { Photo, Menu, Contact, Joshua } from './menu-components';

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

const Content = ({ showProjects, setShowProjects }: Props) => {
  return (
    <Contain>
      <Photo />
      <Joshua />
      <div
        style={{
          width: '100%',
        }}
      >
        <Menu showProjects={showProjects} setShowProjects={setShowProjects} />
        <Contact />
      </div>
    </Contain>
  );
};

export default Content;
