import React, {Fragment, useState} from 'react'
import {gapikey} from '../../api/keys'
import {connect} from 'react-redux'


const LocationMap = (props) => {
	
	const {projects} = props
	const [origin, setOrigin] = useState("Toronto,ON")
	const [destination, setDestination] = useState("Toronto,ON")
	const [mapRender, setMapRender] = useState(false)
	const map_api = `https://www.google.com/maps/embed/v1/directions`

	const handleOrigin = e => {
		const {value} = e.target
		const valForMap = value.replace(/\s/g, '')
		setOrigin(valForMap)
	}

	const handleDest = e => {
		const {value} = e.target;
		const valForMap = value.replace(/\s/g, '')
		setDestination(valForMap)
	}

	// this array only contains information pertaining to origin and destination addresses. if the user decides to select an origin and/or destination address, it won't be added to the array so and the map won't add that location
	let data = []

	// filter through projects array, return string of origin locations ONLY if they do not match the set origin. push to data array
	projects.filter(item => {
			const newItem =  `${item.origin_name}`
		const itemToString = newItem.replace(/\s/g, '')
		if (itemToString !== origin) {
			data.push(`${itemToString}`)
		}
		return data
		})
	
	//  i chose to do two similar filters so that the information would push as single items rather than pairs
	projects.filter(item => {
		const destItem = `${item.destination_name}`
		const itemToString = destItem.replace(/\s/g, '')
			if (itemToString !== destination) {
		data.push(`${itemToString}`)
	}
	return data
	})

	// to use our data as waypoints in the google directions embed API, we have to add a pipe (|) at the end of every item except the last one 
	const slice = data.slice(0, -1).join('|') + '|' + data.slice(-1)

	const embedUrl = `${map_api}?key=${gapikey}&origin=${origin}&destination=${destination}&waypoints=${slice}&zoom=4`

	const startLocationDropdown = projects.map(item => {
		return <option key={item.id}>{item.origin_name}</option>
	})

	const endLocationDropdown = projects.map(item =>{
		return <option key={item.id}>{item.destination_name}</option>
	})

	// shows embed map on click, so that it won't be rendering when the user is selecting Origin and Destination addresses
	const handleEmbed = () => {
		setMapRender(true)
	}

	const embedMap = () => {
		if (mapRender) {
			return (
				<Fragment>
				<h2>Your Suggested Route For All Current Routes</h2>
				<iframe
				width="800"
				height="500"
				frameBorder="0"
				title="map"
				src={embedUrl} allowFullScreen>
				</iframe>
				</Fragment>
			)
		}
	}
	
	return (
		<Fragment>
			<h1>Get All Project Routes</h1>
			<div className="ui divided items">
				<div className=" item">
					<select className="ui selection dropdown" onClick={handleOrigin}>
						<option className="default text">Select Origin Address</option>
						{startLocationDropdown}
					</select>
				</div>
				<div className="item">
					<select className="ui selection dropdown" onClick={handleDest}>
						<option className="default text">Select Destination Address</option>
							{endLocationDropdown}
					</select>
				</div>
			</div>

			<div className="item">
				<p>If left blank, your route will Start and End in Toronto by Default</p>
				<button className="ui button" onClick={handleEmbed}>Get Routes</button>
			</div>

			<div className="item">
				{embedMap()}
			</div>
		</Fragment>
	)
}

const mapStateToProps = state => {
	return {
		projects: state.projects
	}
}
 
export default connect(mapStateToProps)(LocationMap)

