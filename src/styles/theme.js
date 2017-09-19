import ms from 'modularscale-js';
import {
  grey50, grey900,
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

    typoInverted: grey50,
    typoBase: grey900,
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
  },
};

export default theme;
export { modularScale };
