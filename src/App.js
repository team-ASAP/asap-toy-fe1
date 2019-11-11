import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main } from './componenets/pages';
import ProjectSelectPeriod from './componenets/pages/project-create/ProjectSelectPeriod';
import './App.scss';

class App extends Component {
    render() {
        return (
          <>
            <Route exact path="/" component={Main} />
            <Route path="/main" component={Main} />
            <Route path="/project/new" component={ProjectSelectPeriod} />
          </>
        );
    }
}

export default App;
