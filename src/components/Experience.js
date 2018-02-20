/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import Work from './Work';
import SideProjects from './SideProjects';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Experience = () => (
  <Wrapper>
    <Work />
    <SideProjects />
  </Wrapper>
);

export default Experience;
