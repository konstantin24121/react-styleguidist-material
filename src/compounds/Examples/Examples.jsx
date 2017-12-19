import React from 'react';
import PropTypes from 'prop-types';
// import { Playground } from 'rsg-components';
import { Markdown } from 'sg/components';

const Examples = ({ examples, name, props }) => (
  <div>
    {examples.map((example, index) => {
      switch (example.type) {
        case 'code':
          return null;
          // return (
          //   <Playground
          //     code={example.content}
          //     evalInContext={example.evalInContext}
          //     key={`${name}/${index}`}
          //     name={name}
          //     index={index}
          //     props={props}
          //   />
          // );
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
  name: PropTypes.string,
  props: PropTypes.object,
};

Examples.defaultProps = {
  name: '',
  props: null,
};

export default Examples;
