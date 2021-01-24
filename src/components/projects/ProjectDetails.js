import React from 'react'
import {Link} from 'react-router-dom'

const ProjectDetails = ({ project, handleDelete}) => {

	if (project === undefined) {
			return (
		<div className="ui segment">
		<div className="ui active centered inline loader"></div>
		</div>
			)
	} else {



	const {name, id, description, origin_name, destination_name, origin_id, destination_id} = project;


	return(
			<div className="ui fluid card">
			<div className="content">
				<div className="header">
					{`${origin_name} to ${destination_name}`}
					</div>
			</div>
			<div className="content">
				<div className="event">
					<strong>Description:</strong> {description}
					</div>
			</div>
			<div className="content">
				<div className="event">
					<strong>Origin:</strong> {origin_name}
					<br/><strong>Destination:</strong> {destination_name}
				</div>
			</div>
			<div className="content">
				<Link to={`/project/${id}`}>See More Details</Link>
				<button className="ui button" onClick={handleDelete}>Delete</button>
			</div>

		</div>
	)
	}
}



export default ProjectDetails