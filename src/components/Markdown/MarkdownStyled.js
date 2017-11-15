import styled, { css } from 'styled-components';
import { lineScale } from 'sg/styles/utils';
import { Styled as TitleStyled } from 'sg/components/Title';
import { Hr } from 'sg/components';
import { P } from 'sg/components';

const base = styled.span`
  line-height: ${lineScale(1)}px;
  margin: ${lineScale(1)}px 0;
`;

export const Root = base.withComponent('div').extend`
  font-family: ${(props) => props.theme.fontFamilies.base};
  margin: 0;
  zoom: 1;
`;

export const span = base;

const reset = css`
  border-collapse: separate;
  border-spacing: 0;
  caption-side: top;
  cursor: auto;
  direction: ltr;
  empty-cells: show;
  font-family: inherit;
  font-size: medium;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: normal;
  hyphens: none;
  letter-spacing: normal;
  list-style: disc outside none;
  tab-size: 8;
  text-align: inherit;
  text-align-last: auto;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  widows: 2;
  word-spacing: normal;
  display: block;
  box-sizing: border-box;
`;

export const a = styled.a`
  color: ${(props) => props.theme.colors.textPrimary};
  text-decoration: none;
  display: inline-flex;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    border-bottom: 1px solid currentColor;
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    opacity: 0;
  }

  &:focus {
    opacity: 0.8;
  }

  &:hover {
    &::after {
      opacity: 1
    }
  }

  &:has(> img)::after {
    display: none;
  }

`;

export const ul = base.withComponent('ul').extend`
  padding-left: ${(props) => props.theme.typography.medium}px;

  li {
    margin: ${lineScale(0.5)}px 0;
  }
`;
export const ol = ul.withComponent('ol');
export const pre = base.withComponent('pre').extend`
  padding: ${lineScale(0.5)}px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.uiLight};
  overflow-x: auto;

  code {
    ${reset};
    font-family: ${(props) => props.theme.fontFamilies.monospace};
    display: inline;
    font-size: inherit;
    color: inherit;
  }
`;

export const code = base.withComponent('code').extend`
  font-family: ${(props) => props.theme.fontFamilies.monospace};
  padding: 3px 10px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.uiLight};
`;

export const blockquote = base.withComponent('blockquote').extend`
  color: ${(props) => props.theme.colors.textGradeout};
  padding: 0 ${(props) => props.theme.typography.small}px;
  padding-right: 0;
  border-left: 4px solid ${(props) => props.theme.colors.uiGradeout};
`;

export const table = base.withComponent('table').extend`
  border-spacing: 0;
  line-height: ${lineScale(1) - 1}px;

  thead {
    text-align: left;
  }
  th {
    font-weight: 500;
    color: ${(props) => props.theme.colors.textGradeout};
  }
  td, th {
    padding: 0;
    padding: ${lineScale(0.5)}px ${(props) => props.theme.scales.small}px;
    border-spacing: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.uiGradeout};
  }
`;

export const LiFlex = styled.li`
  display: flex;
  margin: ${lineScale(0.5)}px 0;
  margin-left: -${(props) => props.theme.typography.medium - 4}px !important;
`;

export const div = base.withComponent('div');
export const scrolableDiv = base.withComponent('div').extend`
  width: 100%;
  overflow-x: auto;
  > * {
    margin: 0;
  }
`;
export const hr = Hr;
export const h1 = TitleStyled.H1;
export const h2 = TitleStyled.H2;
export const h3 = TitleStyled.H3;
export const h4 = TitleStyled.H4;
export const h5 = TitleStyled.H5;
export const p = P;
