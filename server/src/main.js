// Import the express package
const express = require('express')

// Enable CORS for all requests to the server (for development)
const cors = require('cors')


// Create an express application
const app = express()
const port = 3000

// Must be before any routes are defined to enable CORS (to allow the client to make requests to the server on localhost)
app.use(cors("*"))


// Define a route that sends a JSON response with a message
app.get('/api', (req, res) => {
  res.send(JSON.stringify({ message: 'Hello World!' }))
})

// Define route that sends a JSON response with a list of users (for the /users route)
app.get('/api/users', (req, res) => {
  res.send(JSON.stringify([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})