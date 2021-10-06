import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Main } from "./components/main/Main";

export const App = () => {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path='/' component={Main} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}