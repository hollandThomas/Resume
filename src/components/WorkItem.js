/**
 * @flow
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

const Position = styled.div`
  margin-right: 10px;
  color: ${props => props.theme.main};
  font-size: 20px;
`;

const Timespan = styled.div`
  display: flex;
  flex-direction: row;
  font-style: italic;
`;

const Cities = styled.div`
  display: flex;
`;

const City = styled.div`
  font-size: 16px;
  font-style: italic;
  color: ${props => props.theme.grayDarker};
  margin: 0 15px 0 0;
`;

const Description = styled.div`
  margin-left: 3px;
  margin: 5px 0 5px 3px;
`;

const Technologies = styled.div`
  display: flex;
  margin-left: 3px;
`;

const Technology = styled.div`
  font-size: 14px;
  color: ${props => props.theme.mainLighter};
  margin-right: 15px;
`;

type Props = {
  workExperience: {
    employer: string,
    cities: Array<string>,
    position: string,
    from: string,
    to: string,
    description: Array<string>,
    technologies: Array<string>,
  },
};

class WorkItem extends Component<Props> {
  render() {
    const { workExperience } = this.props;
    return (
      <Wrapper>
        <Header>
          <Position>
            {workExperience.position}, {workExperience.employer}
          </Position>
          <Timespan>
            {workExperience.from} - {workExperience.to}
          </Timespan>
        </Header>
        <Cities>
          {workExperience.cities.map(city => <City key={city}>{city}</City>)}
        </Cities>
        {workExperience.description.map(description => (
          <Description key={description}>{description}</Description>
        ))}
        <Technologies>
          {workExperience.technologies.map(technology => (
            <Technology key={technology}>{technology}</Technology>
          ))}
        </Technologies>
      </Wrapper>
    );
  }
}

export default WorkItem;
