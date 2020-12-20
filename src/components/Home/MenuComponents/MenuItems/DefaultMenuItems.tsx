import React from 'react';
import { MenuItem, MenuNav, MenuContain } from '../common';

const ru = 'https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf';
const gu = 'https://github.com/joshuarichard';
const lu = 'https://linkedin.com/in/joshuajrichard';
const au = 'https://angel.co/joshuarichard';

type Props = {
  setShowProjects: (show: boolean) => void;
};

const DefaultMenuItems = ({ setShowProjects }: Props) => {
  return (
    <MenuContain>
      <MenuItem url={ru} displayText="resume" />
      <MenuItem url={gu} displayText="github" />
      <MenuItem url={lu} displayText="linkedin" />
      <MenuItem url={au} displayText="angellist" />
      <MenuNav onClick={() => setShowProjects(true)}>projects</MenuNav>
    </MenuContain>
  );
};

export default DefaultMenuItems;
