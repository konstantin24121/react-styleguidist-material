import styled from 'styled-components';
import { media, transition } from 'sg/styles/utils';

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

export const paperStyle = {
  height: '100%',
};
