import styled from 'styled-components';
import { lineScale, modularScale } from 'sg/styles/utils';
import { P } from 'sg/components';

export const Required = styled.span`
  color: ${(p) => p.theme.colors.textAccented};
`;

export const Name = styled.span`
  color: ${(p) => p.theme.colors.textPrimary};
`;

export const Extra = P.withComponent('span').extend`
  color: ${(p) => p.theme.colors.textGradeout};
  margin: 0;
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
