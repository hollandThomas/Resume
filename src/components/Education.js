/**
 * @flow
 */

import React, { Component, Fragment } from 'react';

import Heading from './Heading';
import EducationItem from './EducationItem';

type State = {
  education: Array<{
    university: string,
    course: string,
    from: string,
    to: string,
    thesisDescription?: string,
  }>,
};

class Education extends Component<*, State> {
  state = {
    education: [
      {
        university: 'FH Aachen',
        course: 'B.Sc. Informatik',
        from: 'Sep / 2015',
        to: 'Aug / 2018',
        thesisDescription: `Entwicklung einer Web-App und iOS-App zur grafischen
                            Programmierung kontextsensitiver Applikationen in
                            React, React-Native, GraphQL, Apollo, Node.js und
                            MongoDB.`,
      },
      {
        university: 'RWTH Aachen',
        course: 'Informatik',
        from: 'Apr / 2012',
        to: 'Feb / 2015',
      },
      {
        university: 'RWTH Aachen',
        course: 'Computational Engineering Science',
        from: 'Okt / 2010',
        to: 'Feb / 2012',
      },
    ],
  };
  render() {
    const { education } = this.state;
    return (
      <Fragment>
        <Heading value="AUSBILDUNG" width="140px" />
        {education.map(edu => (
          <EducationItem key={edu.university + edu.course} education={edu} />
        ))}
      </Fragment>
    );
  }
}

export default Education;
