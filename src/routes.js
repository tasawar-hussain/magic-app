import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Landing from "./components/landing";
import IconItems from "./components/iconItems";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/icons-list" component={IconItems} />
    </Switch>
  );
};

export default Routes;
