import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main } from './componenets/pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/main" component={Main}/>
            </div>
        );
    }
}

export default App;