import { css } from 'styled-components'

export const media = {
  handhold: (...args) => css`
    @media (min-width: 480px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 758px) {
      ${ css(...args) }
    }
  `,
  desctope: (...args) => css`
    @media (min-width: 980px) {
      ${ css(...args) }
    }
  `,
};

export const transition = (what, theme) => css`
  transition: ${what} ${theme.other.transitionDelay} ${theme.other.transitionFunction};
`;
