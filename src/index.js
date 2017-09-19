/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import _ from 'lodash';
// import isFinite from 'lodash/isFinite';
import ReactDOM from 'react-dom';
import 'highlight.js/styles/tomorrow.css';
import 'baseStyles';
// import { StyleGuide } from 'rsg-components';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import createStore from './config/store';

// import {
//   getComponentNameFromHash,
//   filterComponentsByExactName,
//   filterComponentExamples,
//   filterComponentsInSectionsByExactName,
//   processComponents,
//   processSections,
// } from './utils/utils';

import './styles.css';

// Make libraries available in examples
global.React = React;
global._ = _;

let codeKey = 0;

const dest = document.getElementById('app');
const store = createStore();

// function renderStyleguide(Component) {
//   // const styleguide = require('styleguide!index.js'); // eslint-disable-line
//   // let components = processComponents(styleguide.components);
//   // let sections = processSections(styleguide.sections || []);
//   // console.log(styleguide.config, components, sections);
//
//
//   // let sidebar = true;
//   // let singleExample = false;
//   //
//   // // parse url hash to check if the components list must be filtered
//   // const {
//   //   // name of the filtered component to show isolated
//   //   targetComponentName,
//   //   // index of the fenced block example of the filtered component isolate
//   //   targetComponentIndex,
//   // } = getComponentNameFromHash();
//   //
//   // // filter the requested component id required
//   // if (targetComponentName) {
//   //   components = [
//   //     ...filterComponentsByExactName(components, targetComponentName),
//   //     ...filterComponentsInSectionsByExactName(sections, targetComponentName),
//   //   ];
//   //   sections = [];
//   //   sidebar = false;
//   //
//   //   // if a single component is filtered
//   //   // and a fenced block index is specified hide the other examples
//   //   if (components.length === 1 && isFinite(targetComponentIndex)) {
//   //     components[0] = filterComponentExamples(components[0], targetComponentIndex);
//   //     singleExample = true;
//   //   }
//   // }
//   const dest = document.getElementById('app');
//   const store = createStore();
//
//   ReactDOM.render(
//     <AppContainer>
//       <Component store={store} codeKey={codeKey} />
//       {/* <StyleGuide
//           codeKey={codeKey}
//           config={styleguide.config}
//           components={components}
//           sections={sections}
//           sidebar={sidebar}
//           singleExample={singleExample}
//           targetComponentName={targetComponentName}
//       /> */}
//     </AppContainer>,
//     dest,
//   );
// }

ReactDOM.render(
  <AppContainer>
    <Root store={store} codeKey={codeKey} />
    {/* <StyleGuide
        codeKey={codeKey}
        config={styleguide.config}
        components={components}
        sections={sections}
        sidebar={sidebar}
        singleExample={singleExample}
        targetComponentName={targetComponentName}
    /> */}
  </AppContainer>,
  dest,
);

if (module.hot) {
  module.hot.accept('styleguide!index.js', () => {
    codeKey += 1;
    const NextApp = require('./Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} codeKey={codeKey} />
      </AppContainer>,
      dest,
    );
  });
  module.hot.accept('./Root', () => {
    codeKey += 1;
    const NextApp = require('./Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} codeKey={codeKey} />
      </AppContainer>,
      dest,
    );
  });
};
