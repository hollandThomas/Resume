/**
 * @flow
 */

import React, { Component } from 'react';

import SVG from './SVG';

type Props = {
  size: number,
  color: string,
};

class Phone extends Component<*> {
  props: Props;

  render() {
    const { size, color } = this.props;
    return (
      <SVG
        size={size}
        color={color}
        d="M58.9 47l-10.4-6.8a4.8 4.8 0 0 0-6.5 1.3c-2.4 2.9-5.3 7.7-16.2-3.2S19.6 24.4 22.5 22a4.8 4.8 0 0 0 1.3-6.5L17 5.1c-.9-1.3-2.1-3.4-4.9-3S2 6.6 2 15.6s7.1 20 16.8 29.7S39.5 62 48.4 62s13.2-8 13.5-10-1.7-4.1-3-5z"
      />
    );
  }
}

export default Phone;