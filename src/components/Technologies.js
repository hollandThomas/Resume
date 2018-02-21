/**
 * @flow
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-left: 3px;
`;

const Technology = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 15px;
  color: ${props => props.theme.mainLighter};
  margin-right: 15px;
`;

type Props = {
  values: Array<string>,
};

class Technologies extends Component<Props> {
  render() {
    const { values } = this.props;
    return (
      <Wrapper>
        {values.map(technology => (
          <Technology key={technology}>{technology}</Technology>
        ))}
      </Wrapper>
    );
  }
}

export default Technologies;
