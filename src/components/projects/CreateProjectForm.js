import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import GooglePlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
import {gapikey} from '../../api/keys'
import {Inputs} from './FormComponents/Inputs'
import {createProject} from '../../store/actions/projectActions'
import uuid from 'react-uuid'

class CreateProjectForm extends Component {
	constructor(props) {
		super(props);
		this.state ={
			name: '',
			id: uuid(),
			description: '',
			origin_name: '',
			origin_geo: {},
			destination_geo: {},
			destination_name: '',
			createdAt: new Date(),
		}
	} 


	handleChange =(e) => {
		const {value} = e.target
		this.setState({
			name : value,
			description: value
			}
		)
	}

	handleOrigin = async e => {
		const { description} = e.value
		const geo = await geocodeByAddress(description).then(results => 	getLatLng(results[0]))
		.then(({ lat, lng }) =>{
			return { lat, lng}
		})
		this.setState({
			origin_name: description,
			origin_geo: geo
		})
	}

	handleDestination = async (e) => {
		const {description} = e.value

		const geo = await geocodeByAddress(description).then(results => 	getLatLng(results[0]))
		.then(({ lat, lng }) =>{
			return { lat, lng }
		})
		this.setState({
			destination_name: description,
			destination_geo: geo
		})
	}
		
	handleSubmit = (e) => {
		const {createProject, history} = this.props
		e.preventDefault();
		e.stopPropagation()
		createProject(this.state)
		history.push('/')
	}

	render() {

		const {description, origin_name, destination_name} = this.state
	return (
		<Fragment>
			<form className="ui form"
				onSubmit={this.handleSubmit}
			>
				<GooglePlacesAutoComplete apiKey={gapikey}
				selectProps={{
				origin_name,
				onChange: (e)=>this.handleOrigin(e),
				placeholder: 'Start Address',
				}}
				/>
				<GooglePlacesAutoComplete apiKey={gapikey}
				selectProps={{
				destination_name,
				onChange: (e)=>this.handleDestination(e),
				placeholder: 'End Address'
				}}
				/>
				<div className="ui items">
					<Inputs
					label="Project Description"
					type="text"
					id={description}
					name={description}
					onChange={this.handleChange}
					/>
				</div>

				<button className="ui button">Submit Project</button>
			</form>
		</Fragment>
	)
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects
	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm)