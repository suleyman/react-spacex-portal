import React, { FunctionComponent, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import IndexPage from "./pages/index";
import DetailPage from "./pages/detail";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
