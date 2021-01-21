import React, {Fragment, useState, useRef, useEffect} from 'react'
import axios from 'axios'
import GooglePlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
// import PlacesAutocomplete, { geocodeByAddress,  getLatLng} from 'react-places-autocomplete';
import {gapikey} from '../../api/keys'

//render autocomplete input with package
// pass input values into drawing a map
// draw multiple lines based on what input is added
// start location - end location + any other locations


let autoComplete;
const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const handleScriptLoad = (updateQuery, autoCompleteRef) => {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["geocode"], componentRestrictions: { country: "ca" } }
  );
  autoComplete.setFields(["address_components", "formatted_address", "place_id", "geometry"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
	);
}



const  handlePlaceSelect = async(updateQuery) =>{
	const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  // const id = addressObject.place_id
  // const query = addressObject.place_id
  updateQuery(query);
	// console.log(addressObject);
}
 const SearchBar = () => {
	const [query, setQuery] = useState([])
	const [value1, setValue1] = useState(null)
	const [value2, setValue2] = useState(null)
	const [value3, setValue3] = useState(null)
	const [value4, setValue4] = useState(null)
	  const autoCompleteRef = useRef(null);


	useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${gapikey}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);
	// const [getLatLng, setGetLatLng] = useState("")
	// const [address, setAddress] = useState("")
	// const [,setOriginLatLng] = useState("")
	const placeAPI = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
	const mapsAPI = 'https://www.google.com/maps/embed/v1/directions'
	const directionsAPI = `https://maps.googleapis.com/maps/api/directions/json?`



if (value1 && value2 && value3 !== null) {
	console.log(value1, value2, value3)
} 

// let mapped;
// if (value1 && value2 && value3 !== null) {

// mapped = `${mapsAPI}?key=${KEY}&origin=place_id:${value1.value.place_id}&destination=place_id:${value2.value.place_id}&waypoints=place_id:${value3.value.place_id}&zoom=6`;


// }



// const handleChange = (address) => {
// 	setAddress({address})
// }

// const handleValueSelect = () => {
// geocodeByAddress('Montevideo, Uruguay')
//   .then(results => getLatLng(results[0]))
//   .then(({ lat, lng }) =>
//     console.log('Successfully got latitude and longitude', { lat, lng })
//   );
// }


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
				    {/* <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div> */}

		
				{/* <PlacesAutocomplete
				value={value1}
				onChange={handleChange}
				onSelect={handleValueSelect}
        // onChange={this.handleChange}
        // onSelect={this.handleSelect}
      /> */}
				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				value1,
				onChange: setValue1,
				placeholder: 'Start Address',
				// onSelect: handleValueSelect
				}}
				/>
				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				value2,
				onChange: setValue2,
				placeholder: 'End Address'
				}}
				/>
				<GooglePlacesAutoComplete apiKey={gapikey} 
				selectProps={{
				value3,
				onChange: setValue3,
				placeholder: 'Additional Address'
				}} />

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