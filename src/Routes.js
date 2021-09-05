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
  Video1 as Video1View,
  Video2 as Video2View,
  NotFound as NotFoundView
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from={`/`} to={`/home`} />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path={`/home`}
      />
      <RouteWithLayout
        layout={MinimalLayout}
        component={SignupView}
        exact
        path={`/signup`}
      />
      <RouteWithoutLayout component={LoginView} exact path={`/login`} />
      <RouteWithLayout
        layout={MinimalLayout}
        component={ChoosePlanView}
        exact
        path={`/plan`}
      />
      <RouteWithoutLayout component={PaymentView} exact path={`/payment`} />
      <RouteWithLayout
        layout={MinimalLayout}
        component={ChooseSetupView}
        exact
        path={`/setup`}
      />
      <RouteWithLayout
        layout={MinimalLayout}
        component={ChooseTypeView}
        exact
        path={`/type`}
      />
      <RouteWithLayout
        layout={MinimalLayout}
        component={Video1View}
        exact
        path={`/video1`}
      />
      <RouteWithLayout
        layout={MinimalLayout}
        component={Video2View}
        exact
        path={`/video2`}
      />
      <RouteWithLayout
        layout={MinimalLayout}
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
