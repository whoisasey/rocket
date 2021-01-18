const express = require('express');
const fs = require('fs')
const {v4:uuid} = require('uuid')
const projectRouter = require('./api/routes/projects')
const mongoose = require('mongoose')

const app = express();

//* URI and PORT variables
// URI = 'api/data.json'
PORT = '8080'

//* Express body parser middleware
// app.use(express.json({ extended: false }));
// app.use(express.json())


// const projectRouter = require('./api/routes/projects')
// console.log(projectRouter)

app.use('/api/projects', projectRouter)



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

