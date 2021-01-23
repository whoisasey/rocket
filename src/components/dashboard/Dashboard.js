import React, {Fragment, useState} from 'react'
import {connect} from 'react-redux';

import ProjectList from '../projects/ProjectList'


const Dashboard = (props) => {
	const {projects} = props;

		return (
			<Fragment>
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

export default connect( mapStateToProps)(Dashboard)