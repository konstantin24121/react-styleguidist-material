import { css } from 'styled-components';

export default (what, theme) => css`
  transition: ${what} ${theme.other.transitionDuration} ${theme.other.transitionFunction};
  `;
