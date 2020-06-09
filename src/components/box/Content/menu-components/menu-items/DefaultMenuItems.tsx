import React, { Component } from "react";
import { MenuItem, MenuNav, MenuContain } from "../common";

const ru =
  "https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf";
const gu = "https://github.com/joshuarichard";
const lu = "https://linkedin.com/in/joshuajrichard";
const au = "https://angel.co/joshuarichard";

type Props = {
  toggleShowProjects: () => void;
};
type State = {};

class DefaultMenuItems extends Component<Props, State> {
  render() {
    const { toggleShowProjects } = this.props;
    return (
      <MenuContain>
        <MenuItem>
          <a href={ru} target="_blank" rel="noreferrer noopener">
            resume
          </a>
        </MenuItem>
        <MenuItem>
          <a href={gu} target="_blank" rel="noreferrer noopener">
            github
          </a>
        </MenuItem>
        <MenuItem>
          <a href={lu} target="_blank" rel="noreferrer noopener">
            linkedin
          </a>
        </MenuItem>
        <MenuItem>
          <a href={au} target="_blank" rel="noreferrer noopener">
            angellist
          </a>
        </MenuItem>
        <MenuNav onClick={toggleShowProjects}>projects</MenuNav>
      </MenuContain>
    );
  }
}

export default DefaultMenuItems;
