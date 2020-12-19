import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../styles';
import { DefaultMenuItems, ProjectMenuItems } from './menu-items';

const Contain = styled.div`
  font-size: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // border: solid;
  // border-width: thin;
  // border-color: ${colors.accent};
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
