import styled from 'styled-components';
import { media, modularScale, lineScale } from 'sg/styles/utils';

const withoutMargin = (p, scale) => (p.withoutMargin ? 0 : lineScale(scale));
const fitInLine = (p, scale) => (p.fitInLine ? 'inherit' : `${lineScale(scale)}px`);

const Title = styled.div`
  font-weight: ${(p) => (p.isThin ? 400 : 500)};
  margin: 0;
`;

export const H1 = Title.withComponent('h1').extend`
  font-size: ${modularScale(2)}px;
  margin: ${(p) => withoutMargin(p, 0.5)}px 0 ${(p) => withoutMargin(p, 1)}px;
  line-height: ${(p) => fitInLine(p, 2)};

  ${media.handhold`
    font-size: ${modularScale(2.25)}px;
  `}

  ${media.desctope`
    font-size: ${modularScale(2.5)}px;
    margin: ${(p) => withoutMargin(p, 1)}px 0;
  `}
`;

export const H2 = Title.withComponent('h2').extend`
  font-size: ${modularScale(1.25)}px;
  margin: ${(p) => withoutMargin(p, 0.5)}px 0;
  line-height: ${(p) => fitInLine(p, 2)};

  ${media.handhold`
    font-size: ${modularScale(1.75)}px;
  `}

  ${media.desctope`
    font-size: ${modularScale(2)}px;
    margin: ${(p) => withoutMargin(p, 0.5)}px 0;
  `}
`;

export const H3 = Title.withComponent('h3').extend`
  font-size: ${modularScale(0.75)}px;
  margin: ${(p) => withoutMargin(p, 0.5)}px 0;
  line-height: ${(p) => fitInLine(p, 1)};

  ${media.handhold`
    font-size: ${modularScale(1.25)}px;
  `}

  ${media.desctope`
    font-size: ${modularScale(1.5)}px;
    margin: ${(p) => withoutMargin(p, 1)}px 0;
  `}
`;

export const H4 = Title.withComponent('h4').extend`
  font-size: ${modularScale(0.5)}px;
  margin: ${(p) => withoutMargin(p, 0.5)}px 0;
  line-height: ${(p) => fitInLine(p, 1)};

  ${media.desctope`
    font-size: ${modularScale(1)}px;
    margin: ${(p) => withoutMargin(p, 1)}px 0;
  `}
`;

export const H5 = Title.withComponent('h5').extend`
  font-size: ${modularScale(0.25)}px;
  margin: ${(p) => withoutMargin(p, 0.5)}px 0;
  line-height: ${(p) => fitInLine(p, 1)};

  ${media.desctope`
    font-size: ${modularScale(0.5)}px;
  `}
`;

export const H6 = Title.withComponent('h6').extend`
  font-size: ${modularScale(0)}px;
  margin: ${(p) => withoutMargin(p, 0.5)}px 0;
  line-height: ${(p) => fitInLine(p, 1)};
`;
