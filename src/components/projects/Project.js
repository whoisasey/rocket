import React from 'react'

const Project = () => {
	return (
	<div className="ui fluid card">
			<div className="content">
				<div className="header">{`${origin_name} to ${destination_name}`}</div>
				<Link className="ui button" to={`/project/${id}`}>Edit</Link>
				<button className="ui button" onClick={id=>onDelete(id)} >Delete</button>
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
				{embed()}
			</div>

		</div>
	)
}

export default Project