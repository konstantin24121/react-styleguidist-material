import styled from 'styled-components';
import theme from 'styles/theme';
import { media, lineScale } from 'sg/styles/utils';
import { lime500 } from 'material-ui/styles/colors';

export const Root = styled.div`

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto auto auto;
  grid-template-areas:
    "title"
    "specials"
    "hr"
    "content";

  width: 100%;
  align-items: baseline;

  ${media.handhold`
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto auto;
    grid-template-areas:
      "title specials"
      "hr hr"
      "content content";
  `}

  > *:nth-child(1) {
    grid-area: title;
  }
  > *:nth-child(2) {
    grid-area: specials;
    height: ${lineScale(1)}px;

    &:empty {
      height: 0;
    }
  }
  > *:nth-child(3) {
    grid-area: hr;
  }
  > *:nth-child(4) {
    grid-area: content;
  }
`;

export const Version = styled.span`
  color: ${(p) => p.theme.colors.textGradeout};
  margin-right: ${(p) => p.theme.scales.small}px;
`;

export const iconBtnStyles = {
  padding: 0,
  width: 'auto',
  height: 'auto',
};

export const iconStyles = {
  fontSize: `${theme.typography.base}px`,
  color: lime500,
  margin: `0 ${theme.scales.small}px`,
  position: 'relative',
  bottom: `-${theme.typography.base * 0.2}px`,
};
