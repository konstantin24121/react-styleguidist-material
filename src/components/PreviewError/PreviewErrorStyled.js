import styled, { css } from 'styled-components';
import { lineScale } from 'sg/styles/utils';

const applyRootStyle = ({ smallLine, theme }) => css`
  line-height: ${smallLine ? lineScale(1) : lineScale(1.5)}px;
  padding: ${smallLine ? lineScale(0.5) : lineScale(1)}px;
  color: ${theme.colors.textInverted};
  background: ${theme.colors.uiDanger};
`;

export const Root = styled.p`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: monospace;
  white-space: pre-wrap;
  ${applyRootStyle}
`;
