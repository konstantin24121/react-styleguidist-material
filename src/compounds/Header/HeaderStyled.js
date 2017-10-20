import styled from 'styled-components';

import theme from 'sg/styles/theme';
import { media, modularScale } from 'sg/styles/utils';

export const CONSTS = {
  headerScale: theme.scales.big,
};

export const Root = styled.header`
  width: 100%;
  height: ${CONSTS.headerScale}px;
  background-color: ${(props) => props.theme.colors.uiPrimary};
  overflow: hidden;
  max-width: 100vw;
`;

export const Grid = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  flex-direction: row-reverse;

  ${media.desctope`
    flex-direction: row;
  `}

  > * {
    padding: 0 ${modularScale(0)}px;
    height: 100%;

    ${media.handhold`
      padding: 0 ${modularScale(1)}px;
    `}
  }

  > *:nth-child(1) {
    flex-basis: ${CONSTS.headerScale}px;
    flex-shrink: 0;
    padding: 0;
    border-left: 1px solid ${(props) => props.theme.colors.uiLight};
    ${media.desctope`
      border-left: none;
      border-right: 1px solid ${(props) => props.theme.colors.uiLight};
    `}
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > *:nth-child(2) {
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    order: 3;

    ${media.desctope`
      order: 1;
    `}
  }
  > *:nth-child(3) {
    flex-basis: 50px;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    order: 2;

    ${media.handhold`
      flex-basis: 200px;
    `}
  }
`;

export const HeaderTitle = styled.div`
  line-height: ${CONSTS.headerScale}px;
  color: ${(props) => props.theme.colors.typoInverted};
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 100%;
`;
