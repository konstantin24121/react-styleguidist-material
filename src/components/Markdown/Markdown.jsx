import React from 'react';
import PropTypes from 'prop-types';
import mapValues from 'lodash/mapValues';
import renderMarkdown from 'sg/utils/markdownToJsx';
import Checkbox from 'material-ui/Checkbox';

import * as Styles from './MarkdownStyled';
// Custom CSS classes for each tag: <em> → <em className={s.em}>.
const overrides = mapValues(Styles, (value) => ({
  component: value,
}));

// Add material Checkbox instead input[type=checkbox]
overrides.inputCheckbox = {
  component: Checkbox,
};

// Inline mode: replace <p> (usual root component) with <span>
const overridesInline = {
  ...overrides,
  p: {
    component: Styles.span,
  },
};

const Markdown = ({
  text,
  inline,
}) => {
  const options = { overrides: inline ? overridesInline : overrides };
  return (
    <Styles.Root>
      {renderMarkdown(text, options)}
    </Styles.Root>
  );
};

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

Markdown.defaultProps = {
  inline: false,
};

export default Markdown;
