const express = require("express");
const router = express.Router();
const app = express();
const fs = require('fs')
const {v4:uuid} = require('uuid')
const bodyParser = require('body-parser')

//* getting request from data.json - DONE
//* posting new data to file - DONE
//* recieve single object from file - 
//* delete data from file - DELETE request
//* update data from file - PATCH request


URI = './api/data.json'

//* Express body parser middleware
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.json())
// app.use(express.json({ extended: false }));
const data = JSON.parse(fs.readFileSync(
  `${URI}`
))
// console.log("data", data)


router.get('/', (req, res) => {
	res.json(data)

})

router.post('/add',  jsonParser, (req, res) => {

	const {description, startLocation, endLocation} = req.body

	const newData = data.push({
		id: uuid(), 
		description,
		startLocation,
		endLocation
	})
	fs.writeFile(`${URI}`, JSON.stringify(data),()=> {
	res.status(200).json({
		data: newData
})
	} )

	console.log("-------", req.body)
})
		

router.get('/:id',  (req, res) => {

	// const id = req.params.id
	console.log(req.params.id)
	// take id and look for object with matching id and respond with that object

	// const project = data.find((projectId) => 	projectId.id === id	)	
	// console.log("project", project)

	res.status(200).json({
		message: 'is this working',

	})
	// console.log("single project", project)
})

module.exports = router