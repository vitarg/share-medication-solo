import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />

      <Switch>
        <Route path={"/"}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
