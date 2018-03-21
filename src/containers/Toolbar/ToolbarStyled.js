import styled, { css } from 'styled-components';
import { media, lineScale } from 'sg/styles/utils';

const transparenturl = require('./transparent.jpg');

export const CONSTS = {
  toolbarWidth: lineScale(2),
};

export const applyPlaygroundColor = ({ theme, color }) => {
  if (color === 'light') return theme.colors.background;
  if (color === 'dark') return theme.colors.uiDark;
  if (color === 'transparent') return `url(${transparenturl})`;
  return null;
};

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${CONSTS.toolbarWidth}px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.main};
  display: flex;
  justify-content: flex-start;
  z-index: 1;

  ${media.desctope`
    flex-direction: column;
    bottom: 0;
    height: 100%;
    width: ${CONSTS.toolbarWidth}px;
    right: auto;
  `}
`;

export const Separator = styled.div`
  margin: auto ${lineScale(0.25)}px auto ${lineScale(0.25) - 1}px;
  height: 80%;
  width: 0;
  border-right: 1px solid ${(p) => p.theme.colors.uiLight};

  ${media.desctope`
    height: 0px;
    margin: ${lineScale(0.25)}px auto ${lineScale(0.25) - 1}px;
    width: 80%;
    border-right: none;
    border-bottom: 1px solid ${(p) => p.theme.colors.uiLight};
  `}
`;

export const iconStyle = (theme) => ({
  color: theme.colors.textInverted,
});

const applyColorPreviewStyles = ({ theme, active, color }) => css`
  border: 1px solid ${active ? theme.colors.uiPrimary : theme.colors.uiLight};
  background: ${applyPlaygroundColor({ theme, color })};
`;

export const ColorPreview = styled.div`
  width: ${lineScale(1)}px;
  height: ${lineScale(1)}px;
  border-radius: 50%;
  ${applyColorPreviewStyles};
`;
