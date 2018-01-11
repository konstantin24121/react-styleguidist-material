import styled from 'styled-components';

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SvgContainer = styled.div`
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  margin: 20px;
`;

export const Segment = styled.g.attrs({
  pointerEvents: 'all',
  cursor: 'pointer',
})`
  &:hover > path {
    fill: black !important;
  }
`;

export const Icon = styled.path`
  ${Segment}:hover & {
    fill: white !important;
  }
`;

export const styles = {
  st0: {
    color: '#000000',
    strokeMiterlimit: 0,
  },
  st1: {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 3,
    strokeMiterlimit: 10,
  },
  st2: {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 2,
    strokeMiterlimit: 10,
  },
  st3: {
    fill: 'none',
    stroke: '#000000',
    strokeMiterlimit: 10,
  },
  st4: {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: 'square',
  },
  st5: {
    fill: 'none',
    stroke: '#000000',
    strokeMiterlimit: 10,
    strokeLinecap: 'square',
  },
  st6: {
    stroke: '#000000',
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: 'square',
  },
  st7: {
    fill: '#FFFFFF',
    stroke: '#000000',
    strokeWidth: 2,
    strokeMiterlimit: 10,
  },
};
