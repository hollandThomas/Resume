/**
 * @flow
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

const Item = styled.div`
  margin-left: 10px;
`;

const Placeholder = styled.div`
  width: 22px;
  height: 22px;
`;

type Props = {
  value: string,
  renderIcon?: () => Component<*>,
};

class ContactInformation extends Component<Props> {
  render() {
    const { value, renderIcon } = this.props;
    return (
      <Wrapper>
        {renderIcon ? renderIcon() : <Placeholder />}
        <Item>{value}</Item>
      </Wrapper>
    );
  }
}

export default ContactInformation;
