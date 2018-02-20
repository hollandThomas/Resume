/**
 * @flow
 */

import React, { Component } from 'react';

import SVG from './SVG';

type Props = {
  size: number,
  color: string,
};

class House extends Component<*> {
  props: Props;

  render() {
    const { size, color } = this.props;
    return (
      <SVG
        size={size}
        color={color}
        d="M54 26.267l7.555 7.3a.25.25 0 0 1-.174.43H54V62H40V44H24v18H10V34H2.618a.25.25 0 0 1-.174-.43L32 5l13 12.567V12h9z"
      />
    );
  }
}

export default House;
