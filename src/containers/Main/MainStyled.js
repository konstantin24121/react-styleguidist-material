import styled from 'styled-components';
import { media, transition } from 'sg/styles/utils';
import { stylesConsts as SidebarStyledConsts } from 'sg/containers/Sidebar';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
`;

export const Box = styled.div`
  flex-basis: 100%;
  position: relative;
  ${media.desctope`
     padding-left: ${(props) => {
       return props.sidebarIsOpen ? SidebarStyledConsts.sideBarWidth : 0;
     }}px;
     ${(props) => transition('padding-left', props.theme)};
  `}

  &::after {
    content: '';
    display: block;
    position: absolute;
    visibility: ${(props) => { return props.sidebarIsOpen ? 'visible' : 'hidden'; }};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.uiDark};
    opacity: ${(props) => { return props.sidebarIsOpen ? 0.7 : 0; }};
    ${(props) => transition('opacity', props.theme)};
    ${media.desctope`
      display: none;
    `}
  }
`;
