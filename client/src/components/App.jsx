import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />

      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/medications/:categoryId"}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
