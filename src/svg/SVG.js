/**
 * @flow
 */

import React, { Component } from 'react';

type Props = {
  d: string,
  size: number,
  color: string,
  renderExtra?: () => Component<*>,
};

class Github extends Component<*> {
  props: Props;

  render() {
    const { d, size, color, renderExtra } = this.props;
    return (
      <svg
        viewBox="0 0 64 64"
        aria-labelledby="title"
        aria-describedby="desc"
        role="img"
        width={size}
        height={size}
      >
        {renderExtra ? renderExtra() : null}
        <path data-name="layer1" d={d} fill="none" stroke={color} />
      </svg>
    );
  }
}

export default Github;
