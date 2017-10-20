import { css } from 'styled-components';
import theme from 'sg/styles/theme';

const media = {};
const breakpointsKeys = Object.keys(theme.breakpoints);

for (let i = 0; i < breakpointsKeys.length; i += 1) {
  const key = breakpointsKeys[i];
  media[key] = (...args) => css`
  @media (${theme.breakpoints[key]}) {
    ${css(...args)}
  }
  `;
}

export default media;
