import React, {Component, Fragment, useState} from 'react'
import SearchBar from '../layout/SearchBar'
import {connect} from 'react-redux';

// import LocationSearch from '../layout/LocationSearch'
import LocationSearchBar from '../layout/LocationSearchBar'
import LocationMap from '../layout/LocationMap'
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import SearchLocationInput from '../layout/SearchLocationInput'
import {Inputs} from './FormComponents/Inputs'
import {createProject, CreateProject} from '../../store/actions/projectActions'


class CreateProjectForm extends Component {
	// states - {project name, description, start, end}, {}
	constructor(props) {
		super(props);
		this.state ={
			name: '',
			description: '',
			origin: [],
			destination: '',
			addresses: [],
			address: '',
		}
		 } 

	handleChange =(e) => {
		const {name, value} = e.target
		this.setState({
			[name]: value,
		}
		)
		// console.log(value)
	}
		
	handleSubmit = (e) => {
		const {createProject} = this.props
		e.preventDefault();
		createProject(this.state)
		console.log(this.state)
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
		const {name,description} = this.state
	return (
		<Fragment>
			<form className="ui form"
				onSubmit={this.handleSubmit}
			>
				<Inputs 
					label="Project Name"
					type="text"
					id={name}
					name={name}
					onChange={this.handleChange}
				/>
			<Inputs 
					label="Project Description"
					type="text"
					id={description}
					name={description}
					onChange={this.handleChange}
				/>
				{/* <SearchLocationInput /> */}
				{/* <SearchBar /> */}
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


const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project))
	}
}
export default connect(null, mapDispatchToProps)(CreateProjectForm)