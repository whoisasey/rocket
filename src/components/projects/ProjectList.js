import React from 'react'
import ProjectDetails from './ProjectDetails'

const ProjectList = ({projects}) => {
	return (
		<div>
			{projects && projects.map(project => {
				return (
						<ProjectDetails
						key={project.id}
						project={project}
						/>
					)
				}
				)}
		</div>
	)
}

export default ProjectList