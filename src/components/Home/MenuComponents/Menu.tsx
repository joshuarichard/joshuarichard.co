import React from 'react';
import styled from 'styled-components';

import { DefaultMenuItems, ProjectMenuItems } from './MenuItems';

const Contain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type Props = {
  showProjects: boolean;
  setShowProjects: (show: boolean) => void;
};

export const Menu = ({ showProjects, setShowProjects }: Props) => {
  return (
    <Contain>
      {!showProjects ? (
        <DefaultMenuItems setShowProjects={setShowProjects} />
      ) : (
        <ProjectMenuItems setShowProjects={setShowProjects} />
      )}
    </Contain>
  );
};
