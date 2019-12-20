import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './componenets/pages';
import './App.scss';
import { ProjectSelectPeriod, ProjectSelectPersonnel, ProjectContent } from './componenets/pages/project-create';

class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/main" component={Main} />
					<Route exact path="/new" component={ProjectContent} />
					<Route path="/new/content" component={ProjectContent} />
					<Route path="/new/period" component={ProjectSelectPeriod} />
					<Route path="/new/perssonal" component={ProjectSelectPersonnel} />
				</Switch>
			</>
		);
	}
}

export default App;
