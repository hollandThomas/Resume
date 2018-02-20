/**
 * @flow
 */

import React, { Component, Fragment } from 'react';

import Heading from './Heading';
import SideProjectItem from './SideProjectItem';

type State = {
  sideProjects: Array<{
    name: string,
    description: Array<string>,
    technologies: Array<string>,
  }>,
};

class SideProjects extends Component<*, State> {
  state = {
    sideProjects: [
      {
        name: 'Chatroom Plattform',
        description: [
          `Idee einer klassischen Plattform für Chatrooms, erweitert um
           moderne Elemente sozialer Medien. Minimum viable product wurde
           zusammen mit einem Kommilitonen umgesetzt.`,
          `Full Stack Entwicklung unter anderem in React, GraphQL und Node.js.`,
        ],
        technologies: [
          'React',
          'styled-components',
          'Redux',
          'Relay',
          'GraphQL',
          'Node.js',
          'Neo4j',
        ],
      },
      {
        name: 'Lebenslauf',
        description: [
          `Dieser Lebenslauf ist in React.js geschrieben. Der Code steht auf
           meiner Github Seite.`,
        ],
        technologies: ['React', 'styled-components'],
      },
    ],
  };
  render() {
    const { sideProjects } = this.state;
    return (
      <Fragment>
        <Heading value="NEBENPROJEKTE" width="178px" />
        {sideProjects.map(project => (
          <SideProjectItem key={project.name} sideProject={project} />
        ))}
      </Fragment>
    );
  }
}

export default SideProjects;
