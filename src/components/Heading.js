/**
 * @flow
 */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 22px;
  color: ${props => props.theme.gray};
  margin-bottom: 5px;
`;

const Underline = styled.div`
  width: ${props => props.width};
  height: 1px;
  background-color: ${props => props.theme.mainDarker};
  margin: 0 0 15px 10px;
`;

type Props = {
  value: string,
  width: string,
};

class Heading extends Component<Props> {
  render() {
    const { value, width } = this.props;
    return (
      <Fragment>
        <Title>{value}</Title>
        <Underline width={width} />
      </Fragment>
    );
  }
}

export default Heading;
