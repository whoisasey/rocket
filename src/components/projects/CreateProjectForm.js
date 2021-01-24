import React, {Component, Fragment, useState} from 'react'
import {connect} from 'react-redux';
import GooglePlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
import {gapikey} from '../../api/keys'
import {Inputs} from './FormComponents/Inputs'
import {createProject} from '../../store/actions/projectActions'
import uuid from 'react-uuid'
const geocode = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const address = `Toronto,ON`

class CreateProjectForm extends Component {
	constructor(props) {
		super(props);
		this.state ={
			name: '',
			id: uuid(),
			description: '',
			origin_name: '',
			origin_add: [], //get address from lat/lang and setstate? 
			origin_geo: {},
			destination_add: [], //get address from lat/lang and setstate
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
			const newLat = Math.floor(lat)
			const newLng = Math.floor(lng)
			return { lat:newLat, lng: newLng}
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

		console.log("state", this.state)
	}

	render() {

		const {name,description, origin_name, destination_name} = this.state
	return (
		<Fragment>
			<form className="ui form"
				onSubmit={this.handleSubmit}
			>
				<Inputs 
					label="Project Name"
					// placeholder="test"
					type="text"
					id={name}
					name={name}
					onChange={this.handleChange}
				/>
			<Inputs 
					label="Project Description"
					// value="test"
					type="text"
					id={description}
					name={description}
					onChange={this.handleChange}
				/>
{/* 
				<LocationSearch /> */}

				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				origin_name,
				onChange: (e)=>this.handleOrigin(e),
				placeholder: 'Start Address',
				// onSelect: handleValueSelect
				}}
				/>
				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				destination_name,
				onChange: (e)=>this.handleDestination(e),
				placeholder: 'End Address'
				}}
				/>
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