/**
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import ContactInformationItem from './ContactInformationItem';
import AtSign from '../svg/AtSign';
import Github from '../svg/Github';
import House from '../svg/House';
import Phone from '../svg/Phone';
import theme from '../styles/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInformation = () => (
  <Wrapper>
    <ContactInformationItem
      value="Joseph-von-Görres-Str. 55"
      renderIcon={() => <House size="21" color={theme.grayDark} />}
    />
    <ContactInformationItem value="52068 Aachen" />
    <ContactInformationItem
      value="+49 151 58175063"
      renderIcon={() => <Phone size="21" color={theme.grayDark} />}
    />
    <ContactInformationItem
      value="holland.thomas@gmail.com"
      renderIcon={() => <AtSign size="21" color={theme.grayDark} />}
    />
    <ContactInformationItem
      value="github.com/hollandThomas"
      renderIcon={() => <Github size="21" color={theme.grayDark} />}
    />
  </Wrapper>
);

export default ContactInformation;
