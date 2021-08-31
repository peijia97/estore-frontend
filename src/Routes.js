import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout, RouteWithoutLayout } from "./common";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
  Home as HomeView,
  Signup as SignupView,
  Login as LoginView,
  ChoosePlan as ChoosePlanView,
  Payment as PaymentView,
  ChooseSetup as ChooseSetupView,
  ChooseType as ChooseTypeView,
  ChoosePlatform as ChoosePlatformView,
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
      <RouteWithoutLayout component={LoginView} exact path={`/login`} />
      <RouteWithoutLayout component={ChoosePlanView} exact path={`/plan`} />
      <RouteWithoutLayout component={PaymentView} exact path={`/payment`} />
      <RouteWithoutLayout component={ChooseSetupView} exact path={`/setup`} />
      <RouteWithoutLayout component={ChooseTypeView} exact path={`/type`} />
      <RouteWithoutLayout
        component={ChoosePlatformView}
        exact
        path={`/platform`}
      />
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
