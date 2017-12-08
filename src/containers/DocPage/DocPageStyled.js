import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { media, lineScale } from 'sg/styles/utils';
import { lime500 } from 'material-ui/styles/colors';

const applyRootStyles = (p) => css`
  font-family: ${p.fontStyle === 'sans' ? p.theme.fontFamilies.sans : p.theme.fontFamilies.serif};
  zoom: ${p.textSize};
`;

export const Root = styled.div`
  ${applyRootStyles}
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


export const GridComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto;
  grid-template-areas:
    "appPath"
    "importString"
    "description"
    "props"
    "examples"
    "changelog";

  width: 100%;
  align-items: baseline;


  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto auto;
    grid-template-areas:
      "appPath importString"
      "description description"
      "props props"
      "examples examples"
      "changelog changelog";
  `}

  > *:nth-child(1) {
    grid-area: appPath;
  }
  > *:nth-child(2) {
    grid-area: importString;
  }
  > *:nth-child(3) {
    grid-area: description;
  }
  > *:nth-child(4) {
    grid-area: props;
  }
  > *:nth-child(5) {
    grid-area: examples;
  }
  > *:nth-child(6) {
    grid-area: changelog;
  }
`;

export const Version = styled.span`
  color: ${(p) => p.theme.colors.textGradeout};
  margin-right: ${(p) => p.theme.scales.small}px;
`;

const applyFirstLine = (p) => css`
  font-size: ${p.theme.typography.tiny}px;
  line-height: ${lineScale(1)}px;
  margin-bottom: ${lineScale(0.5)}px;
`;

export const ProjectPath = styled.div`
  color: ${(p) => p.theme.colors.textGradeout};
  word-break: break-all;
  ${applyFirstLine}
`;

export const ImportString = styled.div`
  cursor: pointer;
  color: ${(p) => p.theme.colors.textPrimary};
  word-break: break-all;
  ${applyFirstLine};

  ${media.tablet`
    text-align: right;
  `}
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
