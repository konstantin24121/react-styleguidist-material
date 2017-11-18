/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Main, RootStyles } from 'sg/containers';
import { NotFoundPage } from 'sg/containers/pages';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
  <HashRouter>
    <RootStyles>
      <Switch>
        <Route
          path="/sandbox/:component"
          render={({ match }) => {
            return (<div>{match.params.component}</div>);
          }}
        />
        <Route
          path="/404"
          component={NotFoundPage}
        />
        <Route
          path="/"
          component={Main}
        />
      </Switch>
    </RootStyles>
  </HashRouter>
);

export default Router;
