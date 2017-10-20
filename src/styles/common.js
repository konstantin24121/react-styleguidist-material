import { injectGlobal } from 'styled-components';

injectGlobal`
  .reset {
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
    white-space: normal;
    widows: 2;
    word-spacing: normal;
    all: initial;
    display: block;
    box-sizing: border-box;
  }

  .font {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif;
  }

  .monospace {
    font-family:
      Consolas,
      "Liberation Mono",
      Menlo,
      monospace;
  }

  /* Typografy */
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  /* Base styles */
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    overflow-x: hidden;
  }
`;
