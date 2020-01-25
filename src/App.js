import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Main } from "./componenets/pages";
import Login from "./componenets/pages/Login";

class App extends Component {

  render() {
    return (
      <>
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login} />
      </>
    );
  }
}

export default App;
