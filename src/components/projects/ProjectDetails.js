import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux';
// import '../../../api/data.json'

const ProjectDetails = ({ project}) => {

	if (project === undefined) {
			return (
		<div className="ui segment">
		<div className="ui active centered inline loader"></div>
		</div>
			)
	} else {

	const {name, description, origin, destination} = project
	return (
		<div className="ui fluid card">
			<div className="content">
				<div className="header">{name}</div>
			</div>
			<div className="content">
				<div className="event">
					<strong>Description:</strong> {description}
					</div>
			</div>
			<div className="content">
				<div className="event">
					<strong>Origin:</strong> {origin}
					<br/><strong>Destination:</strong> {destination}
				</div>
			</div>

		</div>
	)
	}
}

export default ProjectDetails