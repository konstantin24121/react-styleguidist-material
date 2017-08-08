import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Containers
import { Main } from './containers';

export default function Root({ store }) {
  return (
    <Provider store={store} key="provider">
      {/* Когда не работал  HMR и кидал ошибку
          https://github.com/ReactTraining/react-router/issues/2704#issuecomment-256611906
      фараону помогло */}
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}


Root.propTypes = {
  store: PropTypes.object.isRequired,
};
