import React, {Fragment} from 'react'
import ProjectDetails from './ProjectDetails'
import {Link} from 'react-router-dom'

export const ProjectList = ({projects}) => {
	// console.log(projects)
	return (
		<div>
			{projects && projects.map(project => {
				return (
					// <Link to={`/project/${project.id}`}>
					// <div className="ui three column grid">
						<ProjectDetails key={project.id} project={project}/>
					// </div>
					// </Link>
					)
				}
				)}
		</div>
	)
}

export default ProjectList