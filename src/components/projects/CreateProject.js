import React, {Component, Fragment, useState} from 'react'
// import SearchBar from '../layout/SearchBar'
// import LocationSearch from '../layout/LocationSearch'
import LocationSearchBar from '../layout/LocationSearchBar'
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


class CreateProject extends Component {
	// states - {project name, description, start, end}, {}
	constructor(props) {
		super(props);
		this.state ={
			origin: '',
			destination: '',
			addresses: [],
			address: '',
		}
		 } 
		
		 handleAddresses = (e) => {
			console.log(e.target)

		}


  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
		const {addresses} = this.state
    geocodeByAddress(address)
      .then(results => 	getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
			.catch(error => console.error('Error', error));
			    this.setState({ address });
  };

	
	render() {
	return (
		<Fragment>
			<form className="ui form">
				{/* <SearchBar /> */}
				<LocationSearchBar 
				state={this.state}
					handleAddresses={this.handleAddresses}
					handleChange={this.handleChange}
					handleSelect={this.handleSelect}
				/>
				{/* <LocationSearchBar /> */}

			</form>
		</Fragment>
	)
	}
}


export default CreateProject