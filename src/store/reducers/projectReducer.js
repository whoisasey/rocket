
const projectReducer = (state = [], action) => {
	// console.log('the project is changing')
	// console.log(state, action)
	switch (action.type) {
		case 'CREATE_PROJECT': 
			console.log('created project', action.project);
			return [
				...state, action.project ];
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.err);
			return state;
		default:
			return state
		}
	}

export default projectReducer