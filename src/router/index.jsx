import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../components/App/App.js';

const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
    </Switch>
  </Router>
)

export default RouteConfig;