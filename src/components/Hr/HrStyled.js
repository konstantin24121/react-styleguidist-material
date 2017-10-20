import styled from 'styled-components';
import { lineScale } from 'sg/styles/utils';

export default styled.hr`
  width: ${(p) => p.width || '100%'};
  border: none;
  border-bottom: 1px ${(p) => p.theme.colors.uiGradeout} solid;
  margin-top: ${lineScale(0.5)}px;
  margin-bottom: calc(${lineScale(0.5)}px - 1px);
`;
