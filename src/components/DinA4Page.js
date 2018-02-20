/**
 * @flow
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 210mm;
  height: 297mm;
  background-color: white;
`;

type Props = {
  render: () => Component<*>,
};

class DinA4APage extends Component<Props> {
  render() {
    const { render } = this.props;
    return <Page>{render()}</Page>;
  }
}

export default DinA4APage;
