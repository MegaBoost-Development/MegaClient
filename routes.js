import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import Home from './src/components/Home/Home';
import Games from './src/components/Games/Games';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    <Route path="/games" component={Games} />
  </Route>
);
