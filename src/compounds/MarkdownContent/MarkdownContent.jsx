import React from 'react';
import PropTypes from 'prop-types';
import { Markdown } from 'sg/components';

const MarkdownContent = ({ content }) => {
  if (!content) return null;
  const markdownSections = content.map(({ content: markdownContent }, index) => (
    <Markdown
      key={index}
      text={markdownContent}
    />
  ));
  return markdownSections;
};

MarkdownContent.propTypes = {
  content: PropTypes.array.isRequired,
};

export default MarkdownContent;
