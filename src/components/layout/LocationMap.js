import React, {Fragment, useState, useEffect} from 'react'
import {gapikey} from '../../api/keys'
import {connect} from 'react-redux'
import axios from 'axios'
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

	const [origin, setOrigin] = useState("Toronto")
	const [destination, setDestination] = useState("Toronto")
	const [directions, setDirections] = useState("")
// console.log(props.projects)
	const {projects} = props
	const map_api = `https://www.google.com/maps/embed/v1/directions`



	const handleOrigin = e => {
		const {value} = e.target
		setOrigin(value)
	}

	const handleDest = e => {
		const {value} = e.target;
		setDestination(value)
	}

	const renderPoints= projects.map(item => {
		return `${item.origin_name}|${item.destination_name}`
	})

	const originDrop = projects.map(item => {
		return <option >{item.origin_name}</option>
	})

	const destDrop = projects.map(item =>{
		return <option>{item.destination_name}</option>
	})



	const embedMap = () => {

		return (
			<iframe
			width="600"
			height="500"
			frameBorder="0"
			src={`${map_api}
			?key=${gapikey}
			&origin=${origin}
			&destination=${destination}`} allowFullScreen>
			</iframe>
		)
	}
	return (
		<Fragment>
			<div className="ui divided items">
				<div className=" item">
				<select className="ui selection dropdown" onClick={handleOrigin}>
					<option className="default text">Select Origin Address</option>
					{originDrop}
				</select>
				</div>
				<div className=" item">
					<select name="" id="" className="ui selection dropdown" onClick={handleDest}>
						<option className="default text">Select Destination Address</option>
						{destDrop}
					</select>
				</div>
			</div>
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
	return {
		projects: state.projects
	}
}
 
export default connect(mapStateToProps)(LocationMap)

