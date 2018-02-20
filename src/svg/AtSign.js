/**
 * @flow
 */

import React, { Component } from 'react';

import SVG from './SVG';

type Props = {
  size: number,
  color: string,
};

class AtSign extends Component<*> {
  props: Props;

  render() {
    const { size, color } = this.props;
    return (
      <SVG
        size={size}
        color={color}
        d="M45 18v20c0 10.9 17 12.3 17-6M46 58.5A30 30 0 1 1 62 32"
        renderExtra={() => (
          <circle
            data-name="layer2"
            cx="31"
            cy="32"
            r="14"
            fill="none"
            stroke={color}
          />
        )}
      />
    );
  }
}

export default AtSign;
