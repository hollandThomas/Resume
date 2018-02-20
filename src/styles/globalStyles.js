/**
 * @flow
 */

import { injectGlobal } from 'styled-components';
import theme from './theme';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

  body {
    font-family: 'Lato', sans-serif;
    color: ${theme.grayDark};
    background-color: ${theme.gray};
    background-size: cover;
    background: repeating-linear-gradient(
      45deg,
      ${theme.grayLighter},
      ${theme.grayLighter} 10px,
      ${theme.grayLight} 10px,
      ${theme.grayLight} 20px
    );
}
`;
