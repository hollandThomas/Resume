/**
 * @flow
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  margin-bottom: 4px;
  font-size: 34px;
  color: ${props => props.theme.mainDarker};
`;

const Title = styled.div`
  font-size: 21px;
`;

type Props = {
  name: string,
  title: string,
};

class Myself extends Component<Props> {
  render() {
    const { name, title } = this.props;
    return (
      <Wrapper>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </Wrapper>
    );
  }
}

export default Myself;
