const express = require("express");
const router = express.Router();
const fs = require('fs')
const {v4:uuid} = require('uuid')
const bodyParser = require('body-parser')
const uri = './api/data.json'
const data = JSON.parse(fs.readFileSync(
  `${uri}`
))
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
	console.log(project)

	res.status(200).json({
		data: project

	})

})

module.exports = router



// class SomeClass {
//   constructor() {
//     this.projects = {}
//   }

//    this method stores a value in a key value object
//   addProject(project: string) {
//     if (this.projects[project]) {
//       return
//     }
//     this.projects[project] = true
//   }

//   getProject(key) {
//     if this.projects[key] {
//       return this.projects[key]
//     }
//     throw new Error("Project does not exist")
//   }
// }

// export default new SomeClass()