import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidebar from "./Sidebar";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

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
        <Route path={"/sign-up"}>
          <SignUpPage />
        </Route>
        <Route path={"/sign-in"}>
          <SignInPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
