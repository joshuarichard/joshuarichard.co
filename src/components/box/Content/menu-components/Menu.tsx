import React, { Component } from "react";
import styled from "styled-components";
import { DefaultMenuItems, ProjectMenuItems } from "./menu-items";

const Contain = styled.div`
  font-size: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: solid;
  border-width: thin;
  border-color: black;
`;

type Props = {
  toggleShowProjects: () => void;
  showProjects: boolean;
};
type State = {};

class Menu extends Component<Props, State> {
  render() {
    const { showProjects, toggleShowProjects } = this.props;
    return (
      <Contain>
        {!showProjects ? (
          <DefaultMenuItems toggleShowProjects={toggleShowProjects} />
        ) : (
          <ProjectMenuItems toggleShowProjects={toggleShowProjects} />
        )}
      </Contain>
    );
  }
}

export default Menu;
