import styled, { css } from 'styled-components';

const applyStyles = ({ align, justify, direction }) => css`
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
`;

export default styled.div`
  display: flex;
  ${applyStyles}
`;
