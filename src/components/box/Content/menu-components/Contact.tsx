import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  font-size: 2rem;
  margin: 1rem auto 0;
  display: flex;
  justify-content: center;
`;

const Contact = () => (
  <Contain>
    <div>
      <a href="mailto:me@joshuarichard.co">me@joshuarichard.co</a>
    </div>
  </Contain>
);

export default Contact;
