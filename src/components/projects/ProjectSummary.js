import React, {Fragment} from 'react'
import {gapikey} from '../../api/keys'
import {connect} from 'react-redux'

 const ProjectSummary = ({project}) => {

	const {description, origin_name, destination_name, origin_geo, destination_geo} = project;
	const map_api = `https://www.google.com/maps/embed/v1/directions`


	const embed = () => {
	return (
		<iframe
		width="800"
		height="500"
		frameBorder="0"
		src={`${map_api}?key=${gapikey}&origin=${origin_geo.lat},${origin_geo.lng}&destination=${destination_geo.lat},${destination_geo.lng}&zoom=7`} allowFullScreen>
		</iframe>
		)
	}

	return (
		<Fragment>
			<h2>{`${origin_name} to ${destination_name}`}</h2>
			<p>{`Start: ${origin_name}`}</p>
			<p>{`End: ${destination_name}`}</p>
			<p>{description}</p>
			<h3>Your Suggested Driving Route</h3>
				{embed()}
		</Fragment>
	)
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	const projects = state.projects
	const project = projects.find(project => project.id === id)
	return {
		project, 
	}
}

export default connect(mapStateToProps)(ProjectSummary)