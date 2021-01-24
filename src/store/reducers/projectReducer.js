const projectReducer = (state = [], action) => {
	switch (action.type) {
		case 'CREATE_PROJECT': 
			return [
				...state, action.project ];
		case 'CREATE_PROJECT_ERROR':
			return state;
		case 'DELETE_PROJECT':
			console.log('deleted project', action.id);
			return state.slice(0, action.id)
			.concat(state.slice(0, action.id +1))
			
		case 'DELETE_PROJECT_ERROR':
			console.log('delete project error', action.err);
			return state;
		case 'EDIT_PROJECT':
			console.log('edit project success', action.project);
			return 
		default:
			return state
		}
	}

export default projectReducer