import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const styleguide = require('styleguide!index.js'); // eslint-disable-line

const middleware = [
  thunk,
];

let enhancer;
if (typeof window === 'object') {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: styleguide.config.title,
    }) || compose;
    enhancer = composeEnhancers(
      applyMiddleware(...middleware),
    );
  }
} else {
  enhancer = applyMiddleware(...middleware);
}

const configureStore = (initialState) => {
  const rootReducer = require('./combine').default;
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./combine', () => {
      const nextRootReducer = require('./combine').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
