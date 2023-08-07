import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {publicRoutes} from "../routes"
import {DAILY_ROUTE} from "../utils/consts";
const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({path, Component}) =>
        <Route path={path} component={Component} exact />)
      }
      <Redirect to={DAILY_ROUTE} />
    </Switch>
  );
};

export default AppRouter;