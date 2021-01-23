// custom  autocomplete - https://medium.com/better-programming/the-best-practice-with-google-place-autocomplete-api-on-react-939211e8b4ce
import React, { useState, useEffect, useRef, Fragment } from "react";
import  {gapikey} from '../api/keys'
import LocationMap from '../components/layout/LocationMap'

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
  const query = addressObject;
  updateQuery(query);
	// console.log(query);
}

const SearchLocationInput = ({query, setQuery, autoCompleteRef}) => {

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${gapikey}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);
  //   useEffect(() => {
  //   loadScript(
  //     `https://maps.googleapis.com/maps/api/js?key=${gapikey}&libraries=places`,
  //     () => handleScriptLoad(setQuery2, autoCompleteRef2)
  //   );
  // }, []);

  return (
		<Fragment>
    <div className="ui input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query.formatted_address}
      />
    </div>
		{/* <LocationMap gapikey={gapikey} query={query}/> */}
		</Fragment>
  );
}

export default SearchLocationInput;