/**
 * @flow
 */

import React, { Fragment } from 'react';

import DinA4APage from './DinA4Page';
import Application from './Application';
import Resume from './Resume';

const File = () => (
  <Fragment>
    <DinA4APage render={() => <Resume />} />
    {/* <DinA4APage render={() => <Application />} /> */}
  </Fragment>
);

export default File;
