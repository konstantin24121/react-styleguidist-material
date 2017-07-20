import React from 'react';
import PropTypes from 'prop-types';
import { Playground, Markdown } from 'rsg-components';

const Examples = ({ examples, name, props, isFlow }, { codeKey }) => (
  <div>
    {examples.map((example, index) => {
      switch (example.type) {
        case 'code':
          return (
            <Playground
              code={example.content}
              evalInContext={example.evalInContext}
              key={`${codeKey}/${index}`}
              name={name}
              index={index}
              props={props}
              isFlow={isFlow}
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
  name: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  isFlow: PropTypes.bool.isRequired,
};

Examples.contextTypes = {
  codeKey: PropTypes.number.isRequired,
};


export default Examples;
