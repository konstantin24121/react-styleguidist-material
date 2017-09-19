import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Containers
import { Main } from './containers';

import theme from 'sg/styles/theme';

export default function Root({ store, codeKey }) {
  return (
    <Provider store={store} key={codeKey}>
      {/* Когда не работал  HMR и кидал ошибку
          https://github.com/ReactTraining/react-router/issues/2704#issuecomment-256611906
      фараону помогло */}
      <ThemeProvider theme={theme}>
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Main} />
            </div>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}


Root.propTypes = {
  store: PropTypes.object.isRequired,
  codeKey: PropTypes.number.isRequired,
};
