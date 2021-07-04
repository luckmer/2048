import { Fragment } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { routes } from "./Routes/index";

type RouteType = {
  path: string;
  Component: () => JSX.Element;
  name: string;
};

const App = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Switch location={location} key={location.pathname}>
        {routes.map(({ path, Component, name }: RouteType) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Switch>
    </Fragment>
  );
};

export default App;
