import styled from 'styled-components';
import { lineScale, modularScale } from 'sg/styles/utils';

export const Required = styled.span`
  color: ${(p) => p.theme.colors.textAccented};
`;

export const Name = styled.span`
  color: ${(p) => p.theme.colors.textPrimary};
`;

export const Default = styled.pre`
  word-break: normal;
  white-space: pre-wrap;
  margin: 0;
`;

export const Extra = styled.span`
  color: ${(p) => p.theme.colors.textGradeout};
`;

export const headerStyle = {
  height: `${lineScale(1.5)}px`,
};

export const rowStyles = {
  lineHeight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  fontSize: `${modularScale(-0.5)}px`,
  paddingLeft: `${lineScale(1)}px`,
  paddingRight: `${lineScale(1)}px`,
};
