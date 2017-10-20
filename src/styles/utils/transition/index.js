import { css } from 'styled-components';

export default (what, theme) => css`
  transition: ${what} ${theme.other.transitionDelay} ${theme.other.transitionFunction};
  `;
