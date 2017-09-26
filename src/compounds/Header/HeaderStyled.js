import styled from 'styled-components';

import { modularScale } from 'sg/styles/theme';
import { media } from 'sg/styles/utils';

const headerScale = modularScale(2.5);

export const Root = styled.header`
  width: 100%;
  height: ${headerScale}px;
  background-color: ${(props) => props.theme.colors.main};
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
    flex-basis: ${headerScale}px;
    flex-shrink: 0;
    padding: 0;
    border-left: 1px solid ${(props) => props.theme.colors.uiLight};
    ${media.desctope`
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
  line-height: ${headerScale}px;
  color: ${(props) => props.theme.colors.typoInverted};
`;
