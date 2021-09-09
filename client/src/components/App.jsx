import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"}>Home</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
