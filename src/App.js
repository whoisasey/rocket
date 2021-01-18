import React, {Fragment} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav.js'
import Dashboard from './components/dashboard/Dashboard'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'

export const App = () => {
	return (
		<Fragment>
				<div className="ui container">
			<BrowserRouter>
				<Nav />
				<Switch>
					<div className="wrapper">
					<Route exact path="/" component={Dashboard} />
					<Route path="/project/:id" component={ProjectDetails} />
					<Route path='/project/create' component={CreateProject} />
					</div>
				</Switch>
			</BrowserRouter>
				</div>
		</Fragment>
	)
}

export default App