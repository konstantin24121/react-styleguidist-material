import styled from 'styled-components';
import { media } from 'sg/styles/utils';

export const Root = styled.div`
  padding: ${(p) => p.theme.scales.small}px ${(p) => p.theme.scales.small}px;
  max-width: 850px;
  margin: 0 auto;

  ${media.handhold`
    padding: ${(p) => p.theme.scales.small}px;
  `}

  ${media.desctope`
    padding: ${(p) => p.theme.scales.medium}px;
  `}
`;

export const Grid = styled.div`
  display: grid;
`;
