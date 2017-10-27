import { injectGlobal } from 'styled-components';
import theme from './theme';

injectGlobal`
    /* Typografy */
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  /* Base styles */
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamilies.base};
    font-size: ${theme.typography.fontBasis}px;
    line-height: ${theme.typography.lineHeightBasis}px;
    overflow-x: hidden;
  }
`;
