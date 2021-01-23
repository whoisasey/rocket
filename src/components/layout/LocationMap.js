import React, {Fragment, useState} from 'react'
import {gapikey} from '../../api/keys'
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

 const LocationMap = () => {
	 const [place, setPlace] = useState(null)

	const map_api = `https://www.google.com/maps/embed/v1/directions`
	const geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`
	const proxyUrl = "https://cors-anywhere.herokuapp.com/";




	const embedMap = () => {
		return (
			<iframe
			width="450"
			height="250"
			frameBorder="0"
			src={`${map_api}?key=${gapikey}&origin=Toronto,ON&destination=Windsor,ON`} allowFullScreen>
			</iframe>
		)
	}
	return (
		<Fragment>
			<LoadScript
				googleMapsApiKey={gapikey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >

        </GoogleMap>
      </LoadScript>
			{/* {embedMap()} */}

		</Fragment>
	)
}
 
export default LocationMap

