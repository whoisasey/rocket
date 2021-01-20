export const createProject = (project) => {
	return (dispatch, getState) => {
		dispatch({type: 'CREATE PROJECT', project})
	}
}