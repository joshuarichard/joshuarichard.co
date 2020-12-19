import React from 'react';
import { MenuItem, MenuNav, MenuContain } from '../common';

const bu = 'https://joshuarichard.bandcamp.com';
const mtu = 'http://music-timeline.s3.amazonaws.com/index.html';
const gbu = 'https://twitter.com/gybote';
const wu = 'https://github.com/joshuarichard/joshuarichard.co';

type Props = {
  setShowProjects: (show: boolean) => void;
};

const ProjectMenuItems = ({ setShowProjects }: Props) => {
  return (
    <MenuContain>
      <MenuItem url={bu} displayText="bandcamp" />
      <MenuItem url={mtu} displayText="music timeline" />
      <MenuItem url={gbu} displayText="gybote" />
      <MenuItem url={wu} displayText="this website" />
      <MenuNav onClick={() => setShowProjects(false)}>back</MenuNav>
    </MenuContain>
  );
};

export default ProjectMenuItems;
