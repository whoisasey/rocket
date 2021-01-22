import React, {Fragment} from 'react'
import ProjectDetails from './ProjectDetails'
import {Link} from 'react-router-dom'

export const ProjectList = ({projects}) => {
	// console.log(projects)
	// const sortedProjs = projects.sort((a,b) => b.createdAt - a.createdAt)
	// console.log(sortedProjs)

	return (
		<div>
			{projects && projects.map(project => {
				return (
						<ProjectDetails key={project.id} project={project}/>
					)
				}
				)}
		</div>
	)
}

export default ProjectList