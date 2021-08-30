import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout, RouteWithoutLayout } from "./common";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
  Home as HomeView,
  Signup as SignupView,
  NotFound as NotFoundView
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from={`${process.env.REACT_APP_ROUTE_PREFIX}` || "/"}
        to={`/home`}
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path={`/home`}
      />
      <RouteWithoutLayout component={SignupView} exact path={`/signup`} />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path={`/not-found`}
      />
      <Redirect to={`/home`} status="404" />
    </Switch>
  );
};

export default Routes;
