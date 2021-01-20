import React, {Fragment} from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

export const ProjectList = ({projects}) => {
	return (
		<div>
			{projects && projects.map(project => {
				return (
					<Link>
						<ProjectSummary project={project} key={project.id}/>
					</Link>
					)
				}
				)}
		</div>
	)
}

export default ProjectList