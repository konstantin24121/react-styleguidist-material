import ms from 'modularscale-js';
import {
  grey50, grey300, grey400, grey900,
  cyan300 } from 'material-ui/styles/colors';

const FONT_BASIS = 16;
const LINE_HEIGHT_BASIS = 1.618;

const modularScaleSettings = {
  base: [FONT_BASIS],
  ratio: LINE_HEIGHT_BASIS,
};

const modularScale = (scale) => ms(scale, modularScaleSettings);

const theme = {
  colors: {
    main: cyan300,
    uiLight: grey50,
    uiPrimary: cyan300,
    uiDark: grey900,
    uiGradeout: grey300,
    typoInverted: grey50,
    typoBase: grey900,
    textGradeout: grey400,
  },
  typorgraph: {
    fontBasis: FONT_BASIS,
    lineHeightBasis: LINE_HEIGHT_BASIS,
    tiny: modularScale(-0.5),
    small: modularScale(1),
    medium: modularScale(1.5),
    big: modularScale(2),
  },
  scales: {
    small: modularScale(1),
    big: modularScale(3),
  },
  other: {
    transitionDelay: '300ms',
    transitionFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  },
};

export default theme;
export { modularScale };
