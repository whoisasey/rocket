import React, {Fragment, useState, useEffect} from 'react'
import {gapikey} from '../../api/keys'
import {connect} from 'react-redux'


const LocationMap = (props) => {
	
	const [origin, setOrigin] = useState("Toronto,ON")
	const [destination, setDestination] = useState("Toronto,ON")
	const [mapRender, setMapRender] = useState(false)
	// const [waypoints, setWaypoints] = useState([])
	// console.log(props.projects)
	const {projects} = props
	const geo_api = `https://maps.googleapis.com/maps/api/geocode/json`
	const map_api = `https://www.google.com/maps/embed/v1/directions`
	const directions_api = `https://maps.googleapis.com/maps/api/directions/json?`

	
	const waypoint1 = "St.John's,NL,Canada"
	const waypoint2 = "Montreal,QC,Canada"
	

	// console.log(waypoint1.replace(/\s+/g, ''))

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

		// const json = `${directions_api}origin=${origin.replace(/\s+/g, '')}&destination=${destination}&waypoints=optimize:true|${waypoint1}|${waypoint2}&key=${gapikey}`
	
	// console.log(json)
let data = []
// * to take the projects data, and extract the origin and destinations - DONE
// * stringify and remove spaces between the text - DONE
// * loop over and return element with pipe | except the last one - DONE
// * render string into embed link  - DONE
// * render map on click

projects.filter(item => {
		const newItem =  `${item.origin_name}`
	const itemToString = newItem.replace(/\s/g, '')
	if (itemToString !== origin) {
		data.push(`${itemToString}`)
	}
	})

	projects.filter(item => {
		const destItem = `${item.destination_name}`
		const itemToString = destItem.replace(/\s/g, '')
			if (itemToString !== destination) {
		data.push(`${itemToString}`)
	}
})
// console.log(data)
const slice = data.slice(0, -1).join('|') + '|' + data.slice(-1)
// console.log(slice)


const embedUrl = `${map_api}?key=${gapikey}&origin=${origin}&destination=${destination}&waypoints=${slice}`
			// console.log(embedUrl)

	const originDrop = projects.map(item => {
		return <option >{item.origin_name}</option>
	})

	const destDrop = projects.map(item =>{
		return <option>{item.destination_name}</option>
	})

	const handleEmbed = () => {
		setMapRender(true)
	}

	const embedMap = () => {
		if (mapRender) {
			return (
			<iframe
			width="600"
			height="500"
			frameBorder="0"
			src={embedUrl} allowFullScreen>
			</iframe>
			)
		}
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
			<button className="ui button" onClick={handleEmbed}>Get Routes</button>

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

