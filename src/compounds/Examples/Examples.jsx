import React from 'react';
import PropTypes from 'prop-types';
import { Markdown, Preview } from 'sg/components';

const Examples = ({ examples }) => (
  <div>
    {examples.map((example, index) => {
      switch (example.type) {
        case 'code':
          return (
            <Preview
              code={example.content}
              evalInContext={example.evalInContext}
              key={index}
            />
          );
        case 'markdown':

          return (
            <Markdown
              text={example.content}
              key={index}
            />
          );
        default:
          return null;
      }
    })}
  </div>
);

Examples.propTypes = {
  examples: PropTypes.array.isRequired,
}

export default Examples;
