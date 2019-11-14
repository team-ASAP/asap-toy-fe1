import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main } from './componenets/pages';

class App extends Component {
    render() {
        return (
          <>
            <Route exact path="/" component={Main} />
            <Route path="/main" component={Main} />
          </>
        );
    }
}

export default App;
