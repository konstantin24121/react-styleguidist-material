import {
  grey50, grey300, grey400, grey900,
  cyan300 } from 'material-ui/styles/colors';
import { lineScale, modularScale } from 'sg/styles/utils';
import { FONT_BASIS, LINE_HEIGHT_BASIS } from 'sg/styles/constants';

const rawTheme = {
  breakpoints: {
    handhold: 'min-width: 480px',
    tablet: 'min-width: 758px',
    desctope: 'min-width: 980px',
  },
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
  typography: {
    fontBasis: FONT_BASIS,
    lineHeightBasis: LINE_HEIGHT_BASIS,
  },
  other: {
    transitionDelay: '300ms',
    transitionFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  },
};

const theme = {
  ...rawTheme,
  typography: {
    tiny: modularScale(-0.5),
    base: modularScale(0),
    small: modularScale(1),
    medium: modularScale(1.5),
    large: modularScale(2),
  },
  scales: {
    small: lineScale(0.5),
    medium: lineScale(1),
    large: lineScale(1.5),
    big: lineScale(2),
    xlarge: lineScale(2.5),
    giant: lineScale(3),
  },
};

export default theme;
