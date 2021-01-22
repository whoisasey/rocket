import React, {Fragment} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import Nav from './components/layout/Nav.js'
import Dashboard from './components/dashboard/Dashboard'
import CreateProjectForm from './components/projects/CreateProjectForm'
import CreateLocation from './components/projects/CreateLocation'
import ProjectDetails from './components/projects/ProjectDetails'
import ProjectSummary from './components/projects/ProjectSummary'
import LocationMap from './components/layout/LocationMap'
import ExampleDirections from './components/layout/ExampleDirections'

const App = (props) => {
// console.log(" app props", props)

const {projects} = props.projects
	return (
		<Fragment>
				<div className="ui container">
			<BrowserRouter>
				<Nav />
				<Switch>
					<div className="wrapper">
					<Route exact path="/" component={Dashboard} />
					<Route path="/routes" component={LocationMap} />
					{/* <Route path='/example' component={ExampleDirections} /> */}
					{/* <Route exact path="/project/:id" render={()=><ProjectDetails projects={projects}/>} /> */}
					<Route exact path="/project/:id" component={ProjectSummary}/>
					<Route exact path='/create' component={CreateProjectForm} />
					{/* <Route exact path='/create' component={CreateLocation} /> */}
					</div>
				</Switch>
			</BrowserRouter>
				</div>
		</Fragment>
	)
}

const mapStateToProps = state => {
	// console.log("app", state)
	return {
		projects: state.projects
	}
}


export default connect(mapStateToProps)(App)