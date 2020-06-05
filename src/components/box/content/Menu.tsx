import React from 'react';
import styled from 'styled-components';

let ru = 'https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf';
let gu = 'https://github.com/joshuarichard';
let lu = 'https://linkedin.com/in/joshuajrichard';
let au = 'https://angel.co/joshuarichard';

const Contain = styled.div`
  font-size: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid;
  border-width: thin;
  border-color: black;
`;

const ContainResume = styled.a`
  margin: 1rem auto 1rem auto;
`;

const ContainLink = styled.div`
  margin: 1rem auto 1rem auto;
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
  </Contain>
);

export default Menu;
