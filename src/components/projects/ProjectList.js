import React, {useState} from 'react'
import ProjectDetails from './ProjectDetails'

const ProjectList = ({projects}) => {

	const [filter, setFilter] = useState("")

	const handleEdit = e => {
		// setList()
		console.log(e)
	}		
	// console.log(filter)

	// * this is an alternative, only removes one item from arary
	// let newList = []
	// const filtered = projects.filter((item) => {
	// 	if (item.id !== filter) {
	// 		newList.push(item)
	// 		return true;
	// 	}
	// })

	const sortedList = projects.sort((a,b) => b.createdAt - a.createdAt)
// console.log('is this sorted?', sortedList)
	return (
		<div>
			{sortedList.map(project => {

			const handleDelete = () => {
				// console.log(project.id)
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