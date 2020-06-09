import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  padding-bottom: 1em;
  text-align: center;
`;

const Name = styled.text`
  font-size: 6em;
  font-family: RobotoItalic;
`;

const Joshua = () => (
  <Contain>
    <Name>joshua richard</Name>
  </Contain>
);

export default Joshua;
