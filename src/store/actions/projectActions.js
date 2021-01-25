export const createProject = (project) => {
	return (dispatch) => {
		dispatch({
			type: 'CREATE_PROJECT', 
			project,
			...project
	})
	}
}

// couldn't figure out how to implement delete and edit project functions
export const deleteProject = (id) => {
	return (dispatch) => {
		return dispatch({
			type: 'DELETE_PROJECT',
			id
		})
	}
}

export const updateProject = (project) => {
	return {
		type: 'EDIT_PROJECT',
		project
	}
}