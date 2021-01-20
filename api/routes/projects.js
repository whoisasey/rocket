const express = require("express");
const router = express.Router();
const fs = require('fs')
const {v4:uuid} = require('uuid')
const bodyParser = require('body-parser')
// const uri = './api/data.json'
// const data = JSON.parse(fs.rea
const data = JSON.parse('http://localhost:3001/data')
console.log(data)
// console.log("data", data)
//* Express body parser middleware
const jsonParser = bodyParser.json()

//* getting request from data.json - DONE
//* posting new data to file - DONE
//* recieve single object from file - DONE
//* delete data from file - DELETE request
//* update data from file - PATCH request


router.get('/', (req, res) => {
	res.json(data)

})

router.post('/add',jsonParser, (req, res) => {
	
	const { description, startLocation, endLocation} = req.body
	console.log(req.body)
	const newData = data.push({
		id: uuid(), 
		description,
		startLocation,
		endLocation
	})
	fs.writeFile(`${uri}`, JSON.stringify(data),()=> {
	res.status(200).json({
		data: newData
		})
	console.log("-------", req.body)
	})
})
		

router.get('/:id', async (req, res) => {
	// take id and look for object with matching id and respond with that object

	const id = req.params.id
	const project = await data.find((projectId) => 	projectId.id === id	)
	// console.log(project)

	res.status(200).json({
		data: project
	})

})

router.delete('/:id', (req, res) => {
	// take id as parameter in route
	// if object matches id, remove object from array and/or return array without that object

	const id = req.params.id;
	// console.log(data)
	// const project = await data.findIndex(projectId => projectId.id === id)
		const project = data.find((projectId) => 	projectId.id === id	)
		if (project) {
				const projects = data.filter(project => {
				console.log("project id", project.id, "id", id)
				return project.id != id
			});
		console.log("all projects", projects.length)
		
		// 	return fs.writeFile(`${uri}`, JSON.stringify(sliced),()=> {
		// res.json(
		// 	{message: 'deleted'
		// })
		// 	})		

		}
			res.status(200).json({
			data: projects
			})

	// 	console.log(project)
	// 	const sliced = data.splice(project, 1)
	// 	console.log(sliced)
	//  return res.json({message: "deleted",
	// 	if (project === -1){
	// return fs.writeFile(`${uri}`, JSON.stringify(sliced),()=> {
	// 	res.json(
	// 		{message: 'deleted'
	// 	})
	// 		})		

	// if (data.filter(project => project.id == id).length != 0){
	// 	const projects = data.filter(
	// 		project => {
	// 			console.log("project", project)
	// 			project.id != id});
	// 	console.log("all projects", projects)
	// 	res.status(200).json({message: 'success'})
	// } else {
	// 	res.status(404).json({message: 'unsuccess'})
	// }
	
})

// var todos = [{id:1, title:'buy the milk'}, {id:2, title:'rent a car'}, {id:3, title:'feed the cat'}];

// app.delete('/:id', (request, response) => {
//   var id = parseInt(request.params.id);
//   if(todos.filter(todo => todo.id == id).length !== 0){
//     todos = todos.filter(todo => todo.id !== id);
//     response.status(200).send();
//   }else{
//     response.status(404).send();
//   }
// });

module.exports = router