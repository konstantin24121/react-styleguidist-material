import styled, { css } from 'styled-components';
import { media, lineScale } from 'sg/styles/utils';
import { stylesConsts as ToolbarStyledConsts, applyPlaygroundColor } from 'sg/containers/Toolbar';

export const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  font-size: ${(p) => p.theme.typography.fontBasis}px;
  line-height: ${(p) => p.theme.typography.lineHeightBasis};
`;

export const Box = styled.div`
  flex-basis: 100%;
  position: relative;
  width: 100%;
  padding-top: ${ToolbarStyledConsts.toolbarWidth}px;

  ${media.desctope`
    padding-top: 0;
    padding-left: ${ToolbarStyledConsts.toolbarWidth}px;
  `}
`;

export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const applyCodeEditorAreaStyles = ({ isOpen }) => css`
  height: ${isOpen ? lineScale(10) : 0}px;
`;

export const CodeEditorArea = styled.div`
  flex-shrink: 0;
  width: 100%;
  transition-property: height;
  ${applyCodeEditorAreaStyles}
`;

const PLAYGROUND_SIZES = {
  lg: {
    width: 1024,
    maxHeight: 600,
  },
  md: {
    width: 800,
    maxHeight: 600,
  },
  sm: {
    width: 568,
    maxHeight: 480,
  },
  xs: {
    width: 320,
    maxHeight: 480,
  },
};

const applyPreviewAreaStyles = ({ theme }) => css`
  padding: ${theme.scales.small}px;
  margin: ${theme.scales.small}px;
  width: calc(100% - ${theme.scales.small * 2}px);

  ${media.desctope`
    width: calc(100% - ${theme.scales.medium * 2}px);
    margin: ${theme.scales.medium}px;
  `}
`;

export const PreviewArea = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 10;
  ${applyPreviewAreaStyles}
`;

export const playgroundStyles = ({ theme, size, color }) => ({
  ...PLAYGROUND_SIZES[size],
  background: applyPlaygroundColor({ theme, color }),
  maxWidth: '100%',
  overflowY: 'auto',
  position: 'relative',
});

export const scrolabbleStyles = ({ theme }) => ({
  padding: `${theme.scales.small}px 0 ${theme.scales.small}px ${theme.scales.medium}px`,
});
