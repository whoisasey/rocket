import React, {Component, Fragment, useState} from 'react'
import SearchBar from '../layout/SearchBar'
import {connect} from 'react-redux';
import GooglePlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
import {gapikey} from '../../api/keys'


// import LocationSearch from '../layout/LocationSearch'
// import LocationSearchBar from '../layout/LocationSearchBar'
// import LocationMap from '../layout/LocationMap'
// import {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';
import SearchLocationInput from '../layout/SearchLocationInput'
import {Inputs} from './FormComponents/Inputs'
import {createProject, CreateProject} from '../../store/actions/projectActions'


class CreateProjectForm extends Component {
	// states - {project name, description, start, end}, {}
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

		}
		// console.log("props", props)
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
		createProject(this.state)
		history.push('/')

		const {addresses, origin_id, destination_id, origin_name, destination_name, name} = this.state;
		this.setState({
			addresses: addresses.push(origin_id, destination_id),
		})
		console.log("state", this.state)
	}
		//  handleAddresses = (e) => {
		// 	console.log(e.target)
		// 	const {addresses} = this.state
		// 	this.setState({
		// 		addresses: addresses.concat(e.target.value)
		// 	})
		// 	console.log(addresses)
		// }


  // handleChange = address => {
  //   this.setState({ address });
  // };

  // handleSelect = (address) => {
	// 		geocodeByAddress(address)
	// 	.then(results => 	getLatLng(results[0]))
	// 	.then(latLng => {
	// 		console.log('Success', latLng)
	// 		this.setState({
	// 			origin: latLng
	// 		})
	// 	})
	// 	.catch(error => console.error('Error', error));
	// 	this.setState({ address	});
  // };

	
	render() {
		// console.log("origin", this.state.origin)
		// console.log(this.state.addresses)
		const {name,description, origin, destination} = this.state
		// console.log({"name": name, "description": description, "origin": origin, "destination": destination})
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

				{/* <SearchLocationInput /> */}
				{/* <SearchBar state={this.state}
				onChange={this.handleChange}
				/> */}
				{/* <LocationSearchBar 
				state={this.state}
				value={this.state.origin}
					handleAddresses={this.handleAddresses}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				/>
				<LocationMap 
				state={this.state}
				/> */}
								{/* <LocationSearchBar 
				state={this.state}
					handleAddresses={this.handleAddresses}
					handleChange={this.handleChange}
					handleSelect={this.handleSelect}
				/> */}
				{/* <LocationSearchBar /> */}
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