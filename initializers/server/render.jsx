import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Helmet } from 'react-helmet';

import webpackAsset from './webpackAsset';

import url from 'url';
import { parse } from 'qs';

import { Switch, StaticRouter, matchPath } from 'react-router-dom';

import { assign } from 'lodash/object';

import createRoutes from 'routes';
const routes = createRoutes();

import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import MainLayout from 'components/layouts/MainLayout';

function historyCb(location) {
  const routeState = { location, params: {}, routes: [], query: {}};

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      routeState.routes.push(route);
      assign(routeState.params, match.params);
      const query = location.search ? parse(location.search.substr(1)) : {};
      assign(routeState.query, query);
    }

    return match;
  });

  return routeState;
}

export default (req, res) => {
  const location = url.parse(req.url);
  const routeState = historyCb(location);

  if (routeState.routes.length == 0) {
    res.status(404);
    res.render('not_found');
  } else {
    const context = {};

    const content = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context = {context} >
        <MainLayout>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </Switch>
        </MainLayout>
      </StaticRouter>
    );

    const head = Helmet.renderStatic();

    res.status(200);
    res.render(
      'index',
      { content, head, webpackAsset }
    );
  }
};
