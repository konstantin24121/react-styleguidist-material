import React from 'react';
import PropTypes from 'prop-types';
import { Markdown } from 'sg/components';
import { ExamplePreview } from 'sg/compounds';

const Examples = ({ examples, componentName, path }) => (
  <div>
    {examples.map((example, index) => {
      switch (example.type) {
        case 'code':
          return (
            <ExamplePreview
              code={example.content}
              evalInContext={example.evalInContext}
              key={index}
              index={index}
              componentName={componentName}
              path={path}
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
  componentName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Examples;
