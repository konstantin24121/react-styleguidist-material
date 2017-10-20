import ms from 'modularscale-js';
import { FONT_BASIS, LINE_HEIGHT_BASIS } from 'sg/styles/constants';

const modularScaleSettings = {
  base: [FONT_BASIS],
  ratio: LINE_HEIGHT_BASIS,
};

const modularScale = (scale) => ms(scale, modularScaleSettings);

export default modularScale;
