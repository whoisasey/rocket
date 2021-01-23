import React, {Fragment, useState, useRef, useEffect} from 'react'
import GooglePlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
import {gapikey} from '../api/keys'

//render autocomplete input with package
// pass input values into drawing a map
// draw multiple lines based on what input is added
// start location - end location + any other locations

 const SearchBar = ({state, handleChange}) => {

	 const {origin, destination} = state;
	const [value1, setValue1] = useState(null)
	const [value2, setValue2] = useState(null)
	const [value3, setValue3] = useState(null)
	const [value4, setValue4] = useState(null)

	const placeAPI = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
	const mapsAPI = 'https://www.google.com/maps/embed/v1/directions'
	const directionsAPI = `https://maps.googleapis.com/maps/api/directions/json?`



if (value1 && value2 && value3 !== null) {
	console.log(value1, value2, value3)
} 


	return (
		<Fragment>
			<form action="">
				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				origin,
				onChange: handleChange,
				placeholder: 'Start Address',
				// onSelect: handleValueSelect
				}}
				/>
				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				destination,
				onChange: handleChange,
				placeholder: 'End Address'
				}}
				/>
				{/* <GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				value3,
				onChange: setValue3,
				placeholder: 'Additional Address'
				}} /> */}

			</form>
		</Fragment>
	)

}


export default SearchBar