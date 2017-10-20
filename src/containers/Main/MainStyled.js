import styled from 'styled-components';
import { media, transition } from 'sg/styles/utils';
import { stylesConsts as SidebarStyledConsts } from 'sg/containers/Sidebar';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  font-size: ${(p) => p.theme.typography.fontBasis}px;
  line-height: ${(p) => p.theme.typography.lineHeightBasis};
`;

export const Box = styled.div`
  flex-basis: 100%;
  position: relative;
  ${media.desctope`
   padding-left: ${(p) => (p.sidebarIsOpen ? SidebarStyledConsts.sideBarWidth : 0)}px;
     ${(p) => transition('padding-left', p.theme)};
  `}

  &::after {
    content: '';
    display: block;
    position: absolute;
    visibility: ${(p) => (p.sidebarIsOpen ? 'visible' : 'hidden')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${(p) => p.theme.colors.uiDark};
    opacity: ${(p) => (p.sidebarIsOpen ? 0.7 : 0)};
    ${(p) => transition('opacity', p.theme)};
    ${media.desctope`
      display: none;
    `}
  }
`;
