import React, { Component } from "react";
import { MenuItem, MenuNav, MenuContain } from "../common";

const bu = "https://joshuarichard.bandcamp.com";
const mtu = "http://music-timeline.s3.amazonaws.com/index.html";
const gbu = "https://twitter.com/gybote";
const wu = "https://github.com/joshuarichard/joshuarichard.co";

type Props = {
  toggleShowProjects: () => void;
};
type State = {};

class ProjectMenuItems extends Component<Props, State> {
  render() {
    const { toggleShowProjects } = this.props;
    return (
      <MenuContain>
        <MenuNav onClick={toggleShowProjects}>back</MenuNav>
        <MenuItem>
          <a href={bu} target="_blank" rel="noreferrer noopener">
            bandcamp
          </a>
        </MenuItem>
        <MenuItem>
          <a href={mtu} target="_blank" rel="noreferrer noopener">
            music timeline
          </a>
        </MenuItem>
        <MenuItem>
          <a href={gbu} target="_blank" rel="noreferrer noopener">
            gybote
          </a>
        </MenuItem>
        <MenuItem>
          <a href={wu} target="_blank" rel="noreferrer noopener">
            this website
          </a>
        </MenuItem>
      </MenuContain>
    );
  }
}

export default ProjectMenuItems;
