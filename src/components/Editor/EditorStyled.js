/* Tweak CodeMirror styles */
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  max-height: 100%;

  > * {
    flex-basis: 100%;
  }

  .CodeMirror {
    height: 100%;
    padding: 0.8rem;
    font-size: 12px;
    background: ${(props) => props.theme.colors.uiLight};
  }
  .CodeMirror-scroll {
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    margin-bottom: -2.1rem;
    margin-right: -2.1rem;
  }
  .cm-error {
    background: none !important;
  }
`;
