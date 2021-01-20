import React, {Fragment, useState} from 'react'
import axios from 'axios'
// import GooglePlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
import PlacesAutocomplete, { geocodeByAddress,  getLatLng} from 'react-places-autocomplete';
import keys from '../../api/keys'

//render autocomplete input with package
// pass input values into drawing a map
// draw multiple lines based on what input is added
// start location - end location + any other locations

 const SearchBar = () => {
	const [value1, setValue1] = useState(null)
	const [value2, setValue2] = useState(null)
	const [value3, setValue3] = useState(null)
	const [value4, setValue4] = useState(null)
	const [getLatLng, setGetLatLng] = useState("")
	const [address, setAddress] = useState("")
	// const [,setOriginLatLng] = useState("")
	const KEY = keys.gapikey
	const placeAPI = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
	const mapsAPI = 'https://www.google.com/maps/embed/v1/directions'
	const directionsAPI = `https://maps.googleapis.com/maps/api/directions/json?`

if (value1 && value2 && value3 !== null) {
	console.log(value1, value2, value3)
} 

let mapped;
if (value1 && value2 && value3 !== null) {

mapped = `${mapsAPI}?key=${KEY}&origin=place_id:${value1.value.place_id}&destination=place_id:${value2.value.place_id}&waypoints=place_id:${value3.value.place_id}&zoom=6`;


// directionals = fetch(`${directionsAPI}origin=place_id:${value1.value.place_id}&destination=place_id:${value2.value.place_id}&waypoints=via:place_id:${value3.value.place_id}&key=${KEY}`).then((res) =>res.json()).then((data) =>console.log(data))
// console.log(JSON.parse(directionals)
// 	{
// 	"end location": directionals.routes.legs.end_location,
// 	"start location": directionals.routes.legs.start_location,
// 	"waypoint": directionals.routes.legs.via_waypoints.location
}

// useEffect(() => {
// 	const start = () => {
// 		gapi.client.init({
// 			'apiKey': KEY
// 		}).then((response) => {
// 			console.log(response)
// 		}).then((err) => {
// 			console.log(err)
// 		})
// 	}
// 	gapi.load('client', start())
// }, [])

const handleChange = (address) => {
	setAddress({address})
}

const handleValueSelect = () => {
geocodeByAddress('Montevideo, Uruguay')
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) =>
    console.log('Successfully got latitude and longitude', { lat, lng })
  );
}


// const generateIframe = ()=> {
//  if (value1 && value2 && value3 !== null) {
// 	 return (
// 			<iframe
//   width="600"
//   height="450"
//   frameborder="0" 
//   src={mapped} >
// </iframe>
// 	 )
//  }
// }
	return (
		<Fragment>
			<form action="">
				<PlacesAutocomplete
				value={value1}
				onChange={handleChange}
				onSelect={handleValueSelect}
        // onChange={this.handleChange}
        // onSelect={this.handleSelect}
      />
				{/* <GooglePlacesAutoComplete apiKey={KEY} 
				selectProps={{
				value1,
				onChange: setValue1,
				placeholder: 'Start Address',
				onSelect: handleValueSelect
				}}
				/>
				<GooglePlacesAutoComplete apiKey={KEY} 
				selectProps={{
				value2,
				onChange: setValue2,
				placeholder: 'End Address'
				}}
				/>
				<GooglePlacesAutoComplete apiKey={KEY} 
				selectProps={{
				value3,
				onChange: setValue3,
				placeholder: 'Additional Address'
				}} */}
				{/* /> */}

			</form>
			{/* {generateIframe()} */}

			{/* <form >
				<input type="text" value={term} />
			</form> */}
			{/* <iframe title="maps"
  width="600"
  height="450"
  frameborder="0"
  src={`${mapsAPI}?key=${KEY}
    &q=Space+Needle,Seattle+WA`} >
</iframe> */}
		{/* <ProjectList />
		<ProjectList /> */}
		</Fragment>
	)

}


export default SearchBar