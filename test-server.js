
const express = require('express')
const app = express()
var cors = require('cors')
const port = 4454

app.use(cors())  // Enable All CORS Requests (Just for this example!)

app.get('/', (request, response) => {
  response.send('A message from the backend by Ashkan, Kredu, venos bona tag')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
