/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Main, Sandbox } from 'sg/containers';
import { NotFoundPage } from 'sg/containers/pages';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route
        path="/sandbox/:componentPath([0-9a-fA-f]*)/:index"
        component={Sandbox}
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
  </HashRouter>
);

export default Router;
