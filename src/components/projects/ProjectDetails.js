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

	const {name, description, origin_name, destination_name} = project;
	return (
		<div className="ui fluid card">
			<div className="content">
				<div className="header">{`${origin_name} to ${destination_name}`}</div>
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

		</div>
	)
	}
}

export default ProjectDetails