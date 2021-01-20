import React, {Component, Fragment, useState} from 'react'
// import SearchBar from '../layout/SearchBar'
// import LocationSearch from '../layout/LocationSearch'
import LocationSearchBar from '../layout/LocationSearchBar'
import LocationMap from '../layout/LocationMap'
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
		
		//  handleAddresses = (e) => {
		// 	console.log(e.target)
		// 	const {addresses} = this.state
		// 	this.setState({
		// 		addresses: addresses.concat(e.target.value)
		// 	})
		// 	console.log(addresses)
		// }


  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = (address) => {
			geocodeByAddress(address)
		.then(results => 	getLatLng(results[0]))
		.then(latLng => {
			console.log('Success', latLng)
			this.setState({
				origin: latLng
			})
		})
		.catch(error => console.error('Error', error));
		this.setState({ address	});
  };

	
	render() {
		// console.log("origin", this.state.origin)
		// console.log(this.state.addresses)
	return (
		<Fragment>
			<form className="ui form">
				{/* <SearchBar /> */}
				<LocationSearchBar 
				state={this.state}
				value={this.state.origin}
					handleAddresses={this.handleAddresses}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				/>
				<LocationMap 
				state={this.state}
				/>
								{/* <LocationSearchBar 
				state={this.state}
					handleAddresses={this.handleAddresses}
					handleChange={this.handleChange}
					handleSelect={this.handleSelect}
				/> */}
				{/* <LocationSearchBar /> */}

			</form>
		</Fragment>
	)
	}
}


export default CreateProject