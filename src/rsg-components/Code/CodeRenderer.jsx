import React from 'react';
import PropTypes from 'prop-types';

import s from '../Markdown/Markdown.css';

const CodeRenderer = ({ className, children, plain }) => (
  <span className={className}>
    {plain
      ? <plaintext className={s.plain}>{children}</plaintext>
      : <code className={s.code}>{children}</code>
    }
  </span>
);

CodeRenderer.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CodeRenderer.defaultProps = {
  plain: false,
  className: '',
};

export default CodeRenderer;
