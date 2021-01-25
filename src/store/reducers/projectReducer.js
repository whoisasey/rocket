const projectReducer = (state = [], action) => {
	switch (action.type) {
		case 'CREATE_PROJECT': 
			return [
				...state, action.project ];
		case 'CREATE_PROJECT_ERROR':
			return state;
		//  could not figure out delete and edit of projects
		// case 'DELETE_PROJECT':
		// 	console.log('deleted project', action.payload);
		// 	return [
		// 		state.filter(project => project.id !== action.payload),
		// 	]
		// case 'DELETE_PROJECT_ERROR':
		// 	console.log('delete project error', action.err);
		// 	return state;
		// case 'EDIT_PROJECT':
		// 	console.log('edit project success', action.project);
		// 	return state;
		default:
			return state
		}
	}

export default projectReducer