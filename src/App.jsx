import React from 'react';

import { Router, Switch } from 'react-router-dom';

import createRoutes from 'routes';
const routes = createRoutes();

import history from 'helpers/routes/history';

import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import MainLayout from 'components/layouts/MainLayout';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <MainLayout>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;
