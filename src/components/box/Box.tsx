import React, { Component } from "react";
import styled from "styled-components";
import Content from "./Content";

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: auto;
  margin: auto;
  padding: 10px;
`;

type Props = {
  showProjects: boolean;
  toggleShowProjects: () => void;
};
type State = {};
class Box extends Component<Props, State> {
  render() {
    const { showProjects, toggleShowProjects } = this.props;
    return (
      <Contain>
        <Content
          showProjects={showProjects}
          toggleShowProjects={toggleShowProjects}
        />
      </Contain>
    );
  }
}

export default Box;
