import React, {Fragment} from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

export const ProjectList = () => {
	return (
		<Link to="/project/:id">
			<ProjectSummary />
		</Link>

	)
}

export default ProjectList