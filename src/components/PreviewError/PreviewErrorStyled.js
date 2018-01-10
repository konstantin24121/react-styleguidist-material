import styled from 'styled-components';
import { lineScale } from 'sg/styles/utils';

export default styled.p`
  line-height: ${(p) => { return p.smallLine ? lineScale(1) : lineScale(1.5); }}px;
  margin: ${(p) => { return p.smallLine ? lineScale(0.5) : lineScale(1); }}px 0;
`;
