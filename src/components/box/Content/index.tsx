import React, { Component } from "react";
import styled from "styled-components";
import { Menu, Contact, Joshua } from "./menu-components";

const Contain = styled.div`
  margin: 10px;
`;

type Props = {
  showProjects: boolean;
  toggleShowProjects: () => void;
};
type State = {};
class Content extends Component<Props, State> {
  render() {
    const { showProjects, toggleShowProjects } = this.props;
    return (
      <Contain>
        <Joshua />
        <div>
          <Menu
            showProjects={showProjects}
            toggleShowProjects={toggleShowProjects}
          />
          <Contact />
        </div>
      </Contain>
    );
  }
}

export default Content;
