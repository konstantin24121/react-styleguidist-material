import styled from 'styled-components';
import { modularScale } from 'sg/styles/theme';

export const Noresults = styled.div`
  padding: ${modularScale(0)}px;
  color: ${(props) => props.theme.colors.textGradeout };
  font-style: italic;
`;
