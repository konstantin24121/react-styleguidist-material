import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import DeviceProvider from 'sg/providers/DeviceProvider';
// Containers
import { Main } from './containers';

import 'sg/styles/common';
import theme from 'sg/styles/theme';

const deviceTypes = [
  {
    name: 'HANDHOLD',
    query: '(min-width: 480px)',
  },
  {
    name: 'TABLET',
    query: '(min-width: 758px)',
  },
  {
    name: 'DESCTOPE',
    query: '(min-width: 980px)',
  },
];

export default function Root({ store, codeKey }) {
  return (
    <Provider store={store} key={codeKey}>
      {/* Когда не работал  HMR и кидал ошибку
          https://github.com/ReactTraining/react-router/issues/2704#issuecomment-256611906
      фараону помогло */}
      <MuiThemeProvider>
        <ThemeProvider theme={theme}>
          <DeviceProvider deviceTypes={deviceTypes}>
            <Router>
              <div>
                <Route path="/" component={Main} />
              </div>
            </Router>
          </DeviceProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
}


Root.propTypes = {
  store: PropTypes.object.isRequired,
  codeKey: PropTypes.number.isRequired,
};