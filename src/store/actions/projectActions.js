export const createProject = (project) => {
	return (dispatch) => {
		dispatch({type: 'CREATE PROJECT', 
		...project
	}).catch((err) => {
		dispatch({
			type: 'CREATE_PROJECT_ERROR',
			err
		})
		console.log(err)
	})
	}
}

export const deleteProject = id => {
	return {
		type: 'DELETE_PROJECT',
		id
	}
}