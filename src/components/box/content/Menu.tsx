import React from 'react';
import styled from 'styled-components';

const ru = 'https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf';
const gu = 'https://github.com/joshuarichard';
const lu = 'https://linkedin.com/in/joshuajrichard';
const au = 'https://angel.co/joshuarichard';
const bu = 'https://joshuarichard.bandcamp.com';

const Contain = styled.div`
  font-size: 2em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border: solid;
  border-width: thin;
  border-color: black;
`;

const ContainResume = styled.a`
  margin: 1rem 1rem 1rem 1rem;
`;

const ContainLink = styled.div`
  margin: 1rem 1rem 1rem 1rem;
`;

const Menu = () => (
  <Contain>
    <ContainResume
       href={ru}
       target="_blank"
       rel='noreferrer noopener'
    >
      resume
    </ContainResume>
    <ContainLink>
      <a href={gu}
         target="_blank"
         rel='noreferrer noopener'
      >
        github
      </a>
    </ContainLink>
    <ContainLink>
      <a href={lu}
         target="_blank"
         rel='noreferrer noopener'
      >
        linkedin
      </a>
    </ContainLink>
    <ContainLink>
      <a href={au}
         target="_blank"
         rel='noreferrer noopener'
      >
        angellist
      </a>
    </ContainLink>
    <ContainLink>
      <a href={bu}
         target="_blank"
         rel='noreferrer noopener'
      >
        bandcamp
      </a>
    </ContainLink>
  </Contain>
);

export default Menu;
