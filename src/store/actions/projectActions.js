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

export const removeProject = (id) => {
	return {
		type: 'DELETE_PROJECT',
		id
	}
}