import styled from 'styled-components';
import { media, transition, modularScale, lineScale } from 'sg/styles/utils';
import theme from 'sg/styles/theme';
import { stylesConsts as HeaderStyledConsts } from 'sg/compounds/Header';

export const CONSTS = {
  sideBarWidth: 320,
};

export const Root = styled.div`
  width: 100%;
  max-width: ${CONSTS.sideBarWidth}px;
  position: absolute;
  right: 0;
  height: 100%;
  z-index: 100;
  transform: translateX(${(p) => (p.isOpen ? '0' : '100%')});
  ${(p) => (!p.disableTransition ? transition('transform', p.theme) : '')}

  ${media.desctope`
    right: auto;
    transform: translateX(${(p) => (p.isOpen ? '0' : '-100%')});
  `}
`;

export const Grid = styled.div`
  > *:nth-child(1){
    position: relative;
    z-index: 3;
  }

  > *:nth-child(2){
    position: relative;
    z-index: 2;
  }

  > *:nth-child(3){
    position: relative;
    z-index: 1;
  }
`;

export const Scrollbox = styled.div`
  padding-top: ${lineScale(0.5)}px;
  padding-right: 6px;
`;

export const Header = styled.div`
  height: ${HeaderStyledConsts.headerScale}px;
  background-color: ${(p) => p.theme.colors.uiPrimary};
`;

export const HeaderGrid = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  > *:nth-child(1){
    height: 100%;
    border-right: 1px solid ${(p) => p.theme.colors.uiLight};
    display: flex;
    align-items: center;
  }

  > *:nth-child(2){

  }
`;

export const trackStyle = {
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: theme.colors.uiGradeout,
};

export const thumbStyle = {
  backgroundColor: theme.colors.uiPrimary,
};

export const paperStyle = {
  height: '100%',
  overflow: 'hidden',
  borderRight: `1px ${theme.colors.uiGradeout} solid`,
};

export const filterStyle = {
  root: {
    width: '100%',
    height: `${HeaderStyledConsts.headerScale + 1}px`,
  },
  input: {
    paddingLeft: `${modularScale(0)}px`,
    paddingTop: `${modularScale(0)}px`,
    marginTop: 0,
  },
  floatingLabel: {
    left: '1em',
    top: `${modularScale(0.8)}px`,
  },
  floatingLabelShrinkStyle: {
    top: `${modularScale(1)}px`,
  },
  underline: {
    bottom: 0,
  },
};

export const scrollbarStyle = {
  width: '100%',
  height: `calc(100vh - ${HeaderStyledConsts.headerScale}px`,
};
