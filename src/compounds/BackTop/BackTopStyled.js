import styled, { css } from 'styled-components';
import { media, lineScale } from 'sg/styles/utils';
import { stylesConsts as sidebarStyledConsts } from 'sg/containers/Sidebar';

const applyRootStyle = ({ theme }) => css`
  transition-timing-function: ${theme.other.transitionFunction};
  transition-duration: ${theme.other.transitionDuration};
  transition-property: transform;
`;

const applyIsVisible = ({ isVisible }) => { return !isVisible ? `${lineScale(5)}px` : '0'; };
const applyIsShifted = ({ isShifted }) => { return isShifted ? `${sidebarStyledConsts.sideBarWidth}px` : '0'; };

export const Root = styled.div`
  position: fixed;
  bottom: ${lineScale(1)}px;
  right: ${lineScale(1)}px;
  transform: translateX(${applyIsShifted}) translateY(${applyIsVisible});
  ${applyRootStyle}

  ${media.tablet`
    bottom: ${lineScale(2)}px;
    left: ${lineScale(2)}px;
    right: auto;
  `}
  `;
