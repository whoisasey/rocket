import React, {Component, Fragment, useState} from 'react'
import {connect} from 'react-redux';
import GooglePlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
import {gapikey} from '../../api/keys'
import {Inputs} from './FormComponents/Inputs'
import {createProject} from '../../store/actions/projectActions'

const geocode = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const address = `Toronto,ON`

class CreateProjectForm extends Component {
	constructor(props) {
		super(props);
		this.state ={
			name: [],
			description: '',
			origin_name: [],
			origin_id: [],
			destination_id: [],
			destination_name: [],
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
		const {place_id, description} = e.value
		const {origin_id, origin_name} = this.state
		this.setState({
			origin_id: origin_id.concat(place_id),
			origin_name: origin_name.concat(description)
		})
		console.log(origin_id, origin_name)
	}

	handleDestination = e => {
		const {place_id, description} = e.value
		const {destination_id, destination_name} = this.state
		this.setState({
			destination_id: destination_id.concat(place_id),
			destination_name: destination_name.concat(description)
		})
	}
		
	handleSubmit = (e) => {
		const {createProject, history} = this.props
		e.preventDefault();
		e.stopPropagation()
		// createProject(this.state)
		// history.push('/')

		const {addresses, origin_id, destination_id, origin_name, destination_name, name} = this.state;

		// const origin_coords =  this.getCoordinates(origin_name)
		// const destin_coords =  this.getCoordinates(destination_name)
		// console.log(origin_coords, destin_coords)
		this.setState({
			addresses: addresses.push(origin_id, destination_id),
		})
		console.log("state", this.state)
	}

	// getCoordinates = async(address) => {
	// 	return (await fetch(`${geocode}${address}&key=${gapikey}`)).json()
	// }
	
	// getCoordinates =  async (address) => {
	// 	try {
	// 		const response =  await fetch(`${geocode}${address}&key=${gapikey}`);
	// 		const data = await response.json()
	// 		console.log(data.results[0].geometry.location)
	// 		// location.push(data.results[0].geometry.location)
	// 		return data.results
	// 	} catch (err){
	// 		console.log(err)
	// 		}
	// 	}

	getCoordinates = async (address) => {
		let response = await fetch(`${geocode}${address}&key=${gapikey}`)
		let data = await response.json()
		let updatedData = data.results
		console.log(updatedData)
		this.state.addresses.push(updatedData)

		return
	}
	
	// 	returnData = async(place) => {
	// 	location = await this.getCoordinates(place)
	// 	console.log(location.results[0].geometry.location)
	// 		return location
	// }
	render() {
		
		// this.getCoordinates(address)
		// console.log(this.state.addresses)

			// const data = async (place) => {
			// 	let data = []
			// 	try {
			// 		data = await this.getCoordinates(place)
			// 	} catch (e) {
			// 		console.error("error", e)
			// 	}
			// 	return data
			// }

		const {name,description, origin, destination} = this.state
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
				origin,
				onChange: (e)=>this.handleOrigin(e),
				placeholder: 'Start Address',
				// onSelect: handleValueSelect
				}}
				/>
				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				destination,
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