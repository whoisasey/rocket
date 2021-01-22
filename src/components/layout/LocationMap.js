import React, {Fragment, useState} from 'react'
import {gapikey} from '../../api/keys'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

import { GoogleComponent } from 'react-google-location' 

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
	//  console.log(gapikey)
	//  console.log(query)
	const map_api = `https://www.google.com/maps/embed/v1/directions`
	const geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`
	const getCoor = `https://maps.googleapis.com/maps/api/geocode/json?address=`
	const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  // const getLocationByCoordinates = (coordinates) =>{
  //   if (gapikey) {
  //     const address = `${coordinates.lat},${coordinates.lng}`
	// 		let _fire = fetch(`${geocode}${address}&key=${gapikey}` )
  //     return _fire.then((resp) => {
  //       return resp.json().then((res) => {
  //         const location = res.results[res.results.length - 2].formatted_address
  //         this._returnData(location)
  //         this.setState({ collectionShow: false })
  //         return res
  //       })
  //     }).catch(error => {
  //       this.setState({ proxyUrl: proxyUrl })

  //     })
  //   }
	// }
	// console.log(getLocationByCoordinates())

//* getCoordinates function is working, but how to return the results?

	const getCoordinatesFromAddress = async (address) => {
		let response = await fetch(`${getCoor}${address}&key=${gapikey}`)
		return response.json().then((res) => {
			console.log(res.results[0].geometry.location)
		})
	}

  const getCoordinates = (address) => {
    if (gapikey) {
			let _fire = fetch(`${getCoor}${address}&key=${gapikey}`   )
			// console.log(_fire)
      return _fire.then((resp) => {
			return resp.json().then((res) => {
				console.log(res)
				return (res.results[0].geometry.location)
			})
        // return resp.json().then((res) => {
        //   return res
        // })
      }).catch(error => {
        console.log(error)
      })
		}
	}
	// console.log(getCoordinates(`Toronto,ON`))
	console.log(getCoordinatesFromAddress(`Toronto,ON`))


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
	// console.log(place)
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

