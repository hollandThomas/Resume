/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import Myself from './Myself';
import ContactInformation from './ContactInformation';

import Picture from '../img/me.jpg';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Portrait = styled.img`
  width: 120px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Header = () => (
  <Wrapper>
    <Introduction>
      <Portrait src={Picture} />
      <Myself name="Thomas Holland" title="B.Sc. Informatik" />
    </Introduction>
    <ContactInformation />
  </Wrapper>
);

export default Header;
