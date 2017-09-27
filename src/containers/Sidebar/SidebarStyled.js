import styled from 'styled-components';
import { media, transition } from 'sg/styles/utils';
import theme, { modularScale } from 'sg/styles/theme';
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
  transform: translateX(${(props) => { return props.isOpen ? '0' : '100%'; }});
  ${(props) => transition('transform', props.theme)}

  ${media.desctope`
    right: auto;
    transform: translateX(${(props) => { return props.isOpen ? '0' : '-100%'; }});
  `}
`;

export const Grid = styled.div`
  > *:nth-child(1){
    position: relative;
    z-index: 2;
  }
    > *:nth-child(2){
    position: relative;
    z-index: 1;
  }
`;

export const Scrollbox = styled.div`
  padding-top: ${modularScale(-2)}px;
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
    paddingLeft: '1em',
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
