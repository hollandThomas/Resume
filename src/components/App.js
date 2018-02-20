/**
 * @flow
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css/sanitize.css';

import '../styles/globalStyles';
import theme from '../styles/theme';
import File from './File';

const App = () => (
  <ThemeProvider theme={theme}>
    <File />
  </ThemeProvider>
);

export default App;
