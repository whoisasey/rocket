import React, {Fragment} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav.js'
import Dashboard from './components/dashboard/Dashboard'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'

export const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Nav />
				<div className="ui container">
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/project/:id" component={ProjectDetails} />
					<Route path='/project/create' component={CreateProject} />
				</Switch>
				</div>
			</BrowserRouter>
		</Fragment>
	)
}

export default App