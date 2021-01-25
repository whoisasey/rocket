import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import ProjectList from '../projects/ProjectList'


const Dashboard = (props) => {
	const {projects} = props;

	return (
		<Fragment>
			<h1>Rocket Route Dispatcher</h1>
			<ProjectList 
			projects={projects}
			/>
		</Fragment>
	)
}


const mapStateToProps = (state) => {
	return {
		projects: state.projects
	}
}

export default connect(mapStateToProps)(Dashboard)