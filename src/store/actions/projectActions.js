export const createProject = (project) => {
	return (dispatch) => {

		dispatch({
			type: 'CREATE_PROJECT', 
			project,
			...project
	})
	// .catch((err) => {
	// 	dispatch({
	// 		type: 'CREATE_PROJECT_ERROR',
	// 		err
	// 	})
	// 	console.log(err)
	// })
	}
}


export const deleteProject = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'DELETE_PROJECT',
			id
		})
	}
}

export const updateProject = (project) => {
	return {
		type: 'EDIT_PROJECT'
	}
}