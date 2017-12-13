import styled from 'styled-components';
import { lineScale } from 'sg/styles/utils';

export default styled.p`
  line-height: ${lineScale(1.5)}px;
  margin: ${lineScale(1)}px 0;
  font-size: ${(p) => p.theme.typography.tiny}px;
  color: ${(p) => p.theme.colors.textGradeout};
`;
