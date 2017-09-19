import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Containers
import { Main } from './containers';

import 'sg/styles/common';
import theme from 'sg/styles/theme';

export default function Root({ store, codeKey }) {
  return (
    <Provider store={store} key={codeKey}>
      {/* Когда не работал  HMR и кидал ошибку
          https://github.com/ReactTraining/react-router/issues/2704#issuecomment-256611906
      фараону помогло */}
      <MuiThemeProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <div>
              <Route exact path="/" component={Main} />
            </div>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
}


Root.propTypes = {
  store: PropTypes.object.isRequired,
  codeKey: PropTypes.number.isRequired,
};
