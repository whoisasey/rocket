import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux';
import {gapikey} from '../../api/keys'

const ProjectDetails = ({ project}) => {

	if (project === undefined) {
			return (
		<div className="ui segment">
		<div className="ui active centered inline loader"></div>
		</div>
			)
	} else {
	const map_api = `https://www.google.com/maps/embed/v1/directions`

	const {name, description, origin_name, destination_name, origin_id, destination_id} = project;

	const embed = () => {
		return (
			<iframe
			width="450"
			height="250"
			frameBorder="0"
			src={`${map_api}?key=${gapikey}&origin=place_id:${origin_id}&destination=place_id:${destination_id}`} allowFullScreen>
			</iframe>
		)
	}
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
			<div className="content">
				{embed()}
			</div>

		</div>
	)
	}
}

export default ProjectDetails