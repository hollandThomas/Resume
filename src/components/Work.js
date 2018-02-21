/**
 * @flow
 */

import React, { Component, Fragment } from 'react';

import Heading from './Heading';
import WorkItem from './WorkItem';

type State = {
  workExperience: Array<{
    employer: string,
    cities: Array<string>,
    position: string,
    from: string,
    to: string,
    description: Array<string>,
    technologies: Array<string>,
  }>,
};

class Work extends Component<*, State> {
  state = {
    workExperience: [
      {
        employer: 'ING2BIZ GmbH',
        cities: ['Aachen, NRW', 'Peking, China', 'Shanghai, China'],
        position: 'Full Stack Entwickler (Praktikum)',
        from: 'Aug / 2014',
        to: 'Feb / 2015',
        description: [
          `Konzeption, Design, Entwicklung und Bereitstellung einer Plattform
           zur Vermittlung von MINT-Studierenden aus Deutschland, China und
           Brasilien an deutsche Unternehmen aus dem Maschinenbau noch während
           ihres Studiums.`,
          `Präsentation des Unternehmens und der Plattform unter anderem an der
           Tsinghua-Universität in Peking und der Tongji-Universität in
           Shanghai.`,
        ],
        technologies: ['PHP', 'MySQL', 'Git', 'AWS'],
      },
      {
        employer: 'Norgren GmbH',
        cities: ['Alpen, NRW'],
        position: 'Softwareentwickler (Aushilfe)',
        from: 'Jun / 2015',
        to: 'Aug / 2015',
        description: [
          `Entwicklung eines interaktiven Kalendars zur abteilungsinternen
           Koordination von Projekten und Mitarbeitern sowie eines Dashboards
           zum System-Monitoring in PHP und SQL.`,
          `Entwicklung eines Tools zur Arbeitsautomatisierung wiederkehrender
           Aufgaben für den Vertrieb in Visual Basic.`,
        ],
        technologies: ['PHP', 'SQL', 'Vanilla JavaScript', 'Visual Basic'],
      },
    ],
  };
  render() {
    const { workExperience } = this.state;
    return (
      <Fragment>
        <Heading value="BERUFSERFAHRUNG" width="215px" />
        {workExperience.map(experience => (
          <WorkItem
            key={experience.employer + experience.from}
            workExperience={experience}
          />
        ))}
      </Fragment>
    );
  }
}

export default Work;
