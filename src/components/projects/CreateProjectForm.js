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
			origin_geo: {},//get origin lat/lang and setstate
			destination_add: [], //get address from lat/lang and setstate
			destination_geo: {}, //get destination lat/lang and setstate
			destination_name: '',
			addresses: [],
			createdAt: new Date(),
			coords: []
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

	handleOrigin = e => {
		const { description} = e.value
		this.setState({
			origin_name: description,
		})
	}

	handleDestination = async (e) => {
		const {description} = e.value
		const geo = await this.destination_geocode(description)
		console.log(geo)
		// console.log("lat lng", this.destination_geocode(description))
		// this.setState({
		// 	destination_name: description
		// })
	}
		
	handleSubmit = (e) => {
		const {createProject, history} = this.props
		e.preventDefault();
		e.stopPropagation()
		// createProject(this.state)
		// history.push('/')

		const {addresses, origin_geo, origin_name, destination_name, destination_geo, name} = this.state;
		const origin =  this.origin_geocode(origin_name)
		console.log(origin)
		// this.setState({
		// 	origin_geo: origin
		// })
			// this.destination_geocode(destination_name)
		console.log("state", this.state)
	}

	origin_geocode =  (location) => {
		geocodeByAddress(location).then(results => 	getLatLng(results[0]))
		.then(({ lat, lng }) =>{
			console.log({lat, lng})
			return { lat, lng }
	
		})
	};

	destination_geocode = async (location) => {
		await geocodeByAddress(location).then(results => 	getLatLng(results[0]))
		.then(({ lat, lng }) =>{
			console.log({lat, lng})
			return { lat, lng }
		// 	this.setState({
		// 		destination_geo: {lat, lng}
		// 	})
		})
	};

	render() {


		const {name,description, origin, destination, origin_name, destination_name} = this.state
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