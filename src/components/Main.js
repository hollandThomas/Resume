/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import Experience from './Experience';
import Education from './Education';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 650px;
`;

const Main = () => (
  <Wrapper>
    <Experience />
    <Education />
  </Wrapper>
);

export default Main;
