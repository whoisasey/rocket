import React, {Fragment, useState} from 'react'
import {gapikey} from '../../api/keys'
import {connect} from 'react-redux'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

	const geo_api = `https://maps.googleapis.com/maps/api/geocode/json`

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 43.6532,
  lng: -79.3832
};

 const LocationMap = (props) => {
// console.log(props.projects)
const {projects} = props
	const map_api = `https://www.google.com/maps/embed/v1/directions`
	const geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`
	const proxyUrl = "https://cors-anywhere.herokuapp.com/";

	let data = []
const origins = projects.map(item => {
	console.log(item.origin_geo)
	data.push(item.origin_geo)
})
const destinations = projects.map(item => {
	data.push(item.destination_geo)
})

console.log(data)


	const embedMap = () => {

		return (
			<iframe
			width="600"
			height="500"
			frameBorder="0"
			src={`${map_api}?key=${gapikey}&origin=Toronto,ON&destination=Windsor,ON`} allowFullScreen>
			</iframe>
		)
	}
	return (
		<Fragment>
			{/* <LoadScript
				googleMapsApiKey={gapikey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >

        </GoogleMap>
      </LoadScript> */}
			{embedMap()}

		</Fragment>
	)
}

const mapStateToProps = state => {
	// console.log(state)
	return {
		projects: state.projects
	}
}
 
export default connect(mapStateToProps)(LocationMap)

