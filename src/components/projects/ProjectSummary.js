import React, {Fragment} from 'react'

export const ProjectSummary = ({project}) => {
	const {name, id, description, startLocation, endLocation} = project
	return (
		<div className="ui card">
			<h2>{name}</h2>
		</div>
	)
}

export default ProjectSummary