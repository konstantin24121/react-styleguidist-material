/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import 'highlight.js/styles/tomorrow.css';
import 'baseStyles';

import { AppContainer } from 'react-hot-loader';
import createStore from './redux/store';

import './styles/global.css';

// Make libraries available in examples
global.React = React;
global._ = _;

window.styleguide = require('styleguide!index.js'); // eslint-disable-line
let codeKey = 0;
const dest = document.getElementById('app');
const store = createStore();

const renderApp = () => {
  window.styleguide = require('styleguide!index.js'); // eslint-disable-line
  codeKey += 1;
  const NextApp = require('./Root').default;
  ReactDOM.render(
    <AppContainer>
      <NextApp store={store} codeKey={codeKey} />
    </AppContainer>,
    dest,
  );
};

if (module.hot) {
  module.hot.accept(['./Root'], renderApp);
  module.hot.accept(['styleguide!index.js'], renderApp);
}

renderApp();
