import React from 'react'
import ProjectDetails from './ProjectDetails'

const ProjectList = ({projects}) => {

	const sortedList = projects.sort((a,b) => b.createdAt - a.createdAt)
	
	return (
		<div>
			{sortedList.map(project => {
				return (
						<ProjectDetails
						key={project.id}
						project={project}
						/>
					)}
				)}
		</div>
	)
}

export default ProjectList