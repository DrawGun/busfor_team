import React from 'react';

import { HashRouter, Switch } from 'react-router-dom';

import createRoutes from 'routes';
const routes = createRoutes();

import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import MainLayout from 'components/layouts/MainLayout';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <MainLayout>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </Switch>
        </MainLayout>
      </HashRouter>
    );
  }
}

export default App;
