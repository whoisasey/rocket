import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteProject } from '../../store/actions/projectActions'; 
// if my deleteProject function was successful, it would be used in this file

const ProjectDetails = ({ project, deleteProject}) => {

	const {id, description, origin_name, destination_name} = project;

	const renderDescription = () => {
		if (description !== '') {
			return (
				<Fragment>
					<strong>Description:</strong> {description}
				</Fragment>
			)
		}
		return null
	}
	return(
			<div className="ui fluid card">
			<div className="content">
				<div className="header">
					{`${origin_name} to ${destination_name}`}
				<Link to={`/route/${id}`} className="ui right floated button">See More Details</Link>
					</div>
			</div>
			<div className="content">
				<div className="event">
					{renderDescription()}
					</div>
			</div>
			<div className="content">
				<div className="event">
					<strong>Origin:</strong> {origin_name}
					<br/><strong>Destination:</strong> {destination_name}
				</div>
			</div>
			<div className="content">
				{/* <button className="ui button" onClick={()=>deleteProject(id)}>Delete</button> */}
			</div>

		</div>
	)
	}

const mapStateToProps = state => {
	return {
		projects: state.projects
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		deleteProject: (id) => dispatch(deleteProject(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)