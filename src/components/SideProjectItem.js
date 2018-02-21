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
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  color: ${props => props.theme.main};
  font-size: 20px;
  margin-right: 15px;
`;

const Link = styled.a`
  color: ${props => props.theme.grayDarker};
  font-size: 15px;
`;

const Description = styled.div`
  width: 650px;
  margin-left: 3px;
  margin: 5px 0 5px 3px;
`;

const Technologies = styled.div`
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
  sideProject: {
    name: string,
    description: Array<string>,
    technologies: Array<string>,
    link?: string,
  },
};

class SideProjectItem extends Component<Props> {
  render() {
    const { sideProject } = this.props;
    return (
      <Wrapper>
        <Header>
          <Name>{sideProject.name}</Name>
          {sideProject.link ? (
            <Link href={sideProject.link}>Github</Link>
          ) : null}
        </Header>
        {sideProject.description.map(description => (
          <Description key={description}>{description}</Description>
        ))}
        <Technologies>
          {sideProject.technologies.map(technology => (
            <Technology key={technology}>{technology}</Technology>
          ))}
        </Technologies>
      </Wrapper>
    );
  }
}

export default SideProjectItem;
