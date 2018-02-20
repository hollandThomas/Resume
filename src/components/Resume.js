/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Main from './Main';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 30px 30px 30px;
`;

const Resume = () => (
  <Wrapper>
    <Header />
    <Main />
  </Wrapper>
);

export default Resume;
