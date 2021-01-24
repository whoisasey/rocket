import React, {Fragment} from 'react'
import {gapikey} from '../../api/keys'
import {connect} from 'react-redux'
import { deleteProject } from '../../store/actions/projectActions';


 const ProjectSummary = ({project, props}) => {

	const {name, description, origin_add, origin_name, destination_add, destination_name, id, origin_geo, destination_geo} = project;
		const map_api = `https://www.google.com/maps/embed/v1/directions`


		const embed = () => {
		return (
			<iframe
			width="450"
			height="250"
			frameBorder="0"
			src={`${map_api}?key=${gapikey}&origin=${origin_geo.lat},${origin_geo.lng}&destination=${destination_geo.lat},${destination_geo.lng}`} allowFullScreen>
			</iframe>
		)
	}

	return (
		<Fragment>
			<h2>{`${origin_name} to ${destination_name}`}</h2>
			<p>{`Start: ${origin_name}`}</p>
			<p>{`End: ${destination_name}`}</p>
			<p>{description}</p>
			<button className="ui button">Delete</button>

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

const mapDispatchToProps = (dispatch) => {
	return {
		deleteProject: (id)=> {
			dispatch({
				type: 'DELETE_PROJECT',
				id
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary)