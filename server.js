const express = require('express');
const projectRouter = require('./api/routes/projects')
const app = express();
//* PORT variables
const port = 8080


app.use('/data', projectRouter)


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

