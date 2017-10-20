import styled from 'styled-components';
import { lineScale } from 'sg/styles/utils';

export const Noresults = styled.div`
  padding: ${lineScale(1)}px;
  color: ${(p) => p.theme.colors.textGradeout};
  font-style: italic;
`;
