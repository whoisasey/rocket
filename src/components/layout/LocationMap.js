import React from 'react'
import keys from '../../api/keys'

 const LocationMap = ({state}) => {
	 const {origin} = state
	const KEY = keys.gapikey
	const mapsAPI = 'https://www.google.com/maps/embed/v1/directions'
	const lat = origin.lat
	const lng = origin.lng
	// console.log(params)

	const embedMap = () => {
		return (
			<iframe
  width="450"
  height="250"
  frameborder="0"
  src={`${mapsAPI}?key=${KEY}&origin=${lat},${lng}&destination=Ottawa,ON`} >
</iframe>
		)
	}
	return (
		<div>
			<p>location map</p>
			{embedMap()}
		</div>
	)
}

export default LocationMap