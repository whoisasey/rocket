import React, {Fragment} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import Nav from './components/layout/Nav.js'
import Dashboard from './components/dashboard/Dashboard'
import CreateProjectForm from './components/projects/CreateProjectForm'
import ProjectSummary from './components/projects/ProjectSummary'
import LocationMap from './components/layout/LocationMap'

const App = (props) => {

	return (
		<Fragment>
				<div className="ui container">
			<BrowserRouter>
				<Nav />
				<Switch>
					<div className="wrapper">
					<Route exact path="/" component={Dashboard} />
					<Route path="/routes" component={LocationMap} />
					<Route exact path="/project/:id" component={ProjectSummary}/>
					<Route exact path='/create' component={CreateProjectForm} />
					</div>
				</Switch>
			</BrowserRouter>
				</div>
		</Fragment>
	)
}


export default App