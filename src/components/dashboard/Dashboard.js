import React, {Fragment, useState} from 'react'
import {connect} from 'react-redux';

import ProjectList from '../projects/ProjectList'


const Dashboard = (props) => {
	const {projects} = props;

	const [search, setSearch] = useState([])
		const [term, setTerm] = useState('')

		return (
			<Fragment>
				<ProjectList projects={projects}/>
			</Fragment>
		)

	}
const mapStateToProps = (state) => {
	return {
		projects: state.data
	}
	
}

export default connect(mapStateToProps)(Dashboard)