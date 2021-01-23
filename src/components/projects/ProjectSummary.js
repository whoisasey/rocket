import React, {Fragment} from 'react'
import {gapikey} from '../../api/keys'
import {connect} from 'react-redux'
import { deleteProject } from '../../store/actions/projectActions';


 const ProjectSummary = ({project, props}) => {

	const {name, description, origin_id, origin_name, destination_id, destination_name, id} = project;
		const map_api = `https://www.google.com/maps/embed/v1/directions`

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

	const handleDelete = (id) => {
		// deleteProject(id)
		console.log(id)
	}
	return (
		<Fragment>
			<h2>{`${origin_name} to ${destination_name}`}</h2>
			<p>{description}</p>
			<button className="ui button">Edit</button>
			<button className="ui button" onClick={()=>handleDelete(id)}>Delete</button>
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