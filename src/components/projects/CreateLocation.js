//create locations with hooks

import React, {Fragment, useState, useRef} from 'react'
import SearchLocationInput from '../layout/SearchLocationInput'
import SearchBar from '../layout/SearchBar'
import {Inputs} from './FormComponents/Inputs'


const CreateLocation = () => {
		const [query1, setQuery1] = useState("");
		const [query2, setQuery2] = useState("")
		const [val1, setVal1] = useState([])
		const [val2, setVal2] = useState([])
  const autoCompleteRef1 = useRef(null);
  const autoCompleteRef2 = useRef(null);

	console.log("query1",query1)
	// console.log({val1, val2})
	return (
		<Fragment>
			<form className="ui form"
				// onSubmit={this.handleSubmit}
			>
				{/* <Inputs 
					label="Project Name"
					type="text"
					id={name}
					name={name}
					onChange={this.handleChange}
				/>
			<Inputs 
					label="Project Description"
					type="text"
					id={description}
					name={description}
					onChange={this.handleChange}
				/> */}
				<SearchLocationInput query={query1} setQuery={setQuery1} autoCompleteRef={autoCompleteRef1}/>
				{/* <SearchLocationInput query={query2} setQuery={setQuery2} autoCompleteRef={autoCompleteRef2}/> */}
			{/* <SearchBar /> */}
			</form>
		</Fragment>
	)
}

export default CreateLocation