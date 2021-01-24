import React, {useState} from 'react'
import ProjectDetails from './ProjectDetails'

const ProjectList = ({projects}) => {

	const [filter, setFilter] = useState("")

	const handleEdit = e => {
		// setList()
		console.log(e)
	}		


	// * this is an alternative, only removes one item from arary
	let newList = []
	const filtered = projects.filter((item) => {
		if (item.id !== filter) {
			newList.push(item)
			return true;
		}
	})

	const sortedList = projects.sort((a,b) => b.createdAt - a.createdAt)
	return (
		<div>
			{sortedList.map(project => {

			const handleDelete = () => {
				setFilter(project.id)
			}
				return (
						<ProjectDetails
						key={project.id}
						project={project}
						handleDelete={handleDelete}
						/>
					)
				}
				)}
		</div>
	)
}

export default ProjectList