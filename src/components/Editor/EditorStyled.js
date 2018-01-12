/* Tweak CodeMirror styles */
import styled from 'styled-components';

export const Root = styled.div`

  .CodeMirror {
    height: auto;
    padding: 0.8rem;
    font-size: 12px;
    background: ${(props) => props.theme.colors.uiLight};
  }
  .CodeMirror-scroll {
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
    margin-bottom: -2.1rem;
    margin-right: -2.1rem;
  }
  .cm-error {
    background: none !important;
  }
`;
