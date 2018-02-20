/**
 * @flow
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  margin-bottom: 2px;
`;

const OneLiner = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
`;

const When = styled.div`
  width: 225px;
  font-style: italic;
`;

const What = styled.div`
  font-weight: bold;
`;

const ThesisDescription = styled.div`
  margin-left: 230px;
`;

type Props = {
  education: {
    university: string,
    course: string,
    from: string,
    to: string,
    thesisDescription?: string,
  },
};

class EducationItem extends Component<Props> {
  render() {
    const { education } = this.props;
    return (
      <Wrapper>
        <OneLiner>
          <When>
            {education.from} - {education.to}
          </When>
          <What>
            {education.course}, {education.university}
          </What>
        </OneLiner>
        {education.thesisDescription ? (
          <ThesisDescription>{education.thesisDescription}</ThesisDescription>
        ) : null}
      </Wrapper>
    );
  }
}

export default EducationItem;
