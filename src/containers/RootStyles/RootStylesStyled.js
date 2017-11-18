import styled, { injectGlobal, css } from 'styled-components';

const applyDisplayMod = ({ mod }) => {
  switch (mod) {
    /* Blue filter mod
     * Add yellow filter above content
     */
    case 'bluefilter': return css`
      ::after {
        content: '';
        position: fixed;
        user-select: none;
        pointer-events: none;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #FFEA00;
        opacity: 0.2;
        z-index: 299792458;
      }
    `;
    default: return '';
  }
};

export const Root = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  ${applyDisplayMod};
`;

export const applyGlobalStyles = ({ theme }) => {
  injectGlobal`
    body {
      background-color: ${theme.colors.background};
    }
  `;
};
