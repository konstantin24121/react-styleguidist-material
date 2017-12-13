import { PStyled } from 'sg/components/P';

export default PStyled.extend`
  font-family: ${(p) => p.theme.fontFamilies.monospace};
  display: ${(p) => { return p.inline ? 'inline' : 'block'; }};
`;
