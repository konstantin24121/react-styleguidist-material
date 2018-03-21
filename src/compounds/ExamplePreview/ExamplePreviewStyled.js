import styled, { css } from 'styled-components';
import { transition, lineScale } from 'sg/styles/utils';

export const Root = styled.div`
  position: relative;
  margin-bottom: ${(props) => { return props.isTouch ? lineScale(2) : 0; }}px;
`;

const applyTollbarStyles = ({ theme, isTouch }) => css`
  opacity: ${isTouch ? 1 : 0};
  ${transition('opacity', theme)};
  ${isTouch ? 'bottom' : 'top'}: 0;
  transform: translateY(${isTouch ? '100%' : '-100%'});
`;

export const Toolbar = styled.div`
  position: absolute;
  right: 0;
  ${applyTollbarStyles}

  ${Root}:hover & {
    opacity: 0.8;
  }
`;

export const iconStyle = () => ({
  width: 20,
  color: 'currentColor',
});

export const hoveredIconStyle = (theme) => ({
  color: theme.colors.textPrimary,
});
