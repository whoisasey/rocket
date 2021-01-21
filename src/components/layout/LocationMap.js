import React from 'react'
import keys from '../../api/keys'

 const LocationMap = ({gapikey, query}) => {
	//  console.log(gapikey)
	//  console.log(query)
	const mapsAPI = 'https://www.google.com/maps/embed/v1/directions/'

	const embedMap = () => {
		return (
			<iframe
  width="450"
  height="250"
  frameborder="0"
  src={`${mapsAPI}?key=${gapikey}origin=${query}&destination=Ottawa,ON`} >
</iframe>
		)
	}
	return (
		<div>
			<p>location map</p>
			{/* {embedMap()} */}
		</div>
	)
}

export default LocationMap