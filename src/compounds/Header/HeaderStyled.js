import styled from 'styled-components';
import { modularScale } from 'sg/styles/theme';

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

  > * {
    padding: 0 ${modularScale(-1)}px;
    height: 100%;
  }

  > *:nth-child(1) {
    flex-basis: ${headerScale}px;
    flex-shrink: 0;
    padding: 0;
    border-right: 1px solid ${(props) => props.theme.colors.uiLight};
  }
  > *:nth-child(2) {
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;
  }
  > *:nth-child(3) {
    flex-basis: 300px;
    flex-grow: 2;
  }
`;
