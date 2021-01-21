import React, {Fragment} from 'react'

export const ProjectSummary = ({project}) => {
	console.log("single project?", project)
	const {name, id, description, origin, destination} = project
	// console.log(project)
	return (
		<div className="ui card">
			<h2>{name}</h2>
		</div>
	)
}

export default ProjectSummary