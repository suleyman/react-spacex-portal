import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/index";
import DetailPage from "./pages/detail";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/detail/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
