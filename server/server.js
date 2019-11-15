// import packages
const express = require('express')
const app = express()
const cors = require('cors')

// import routes
const piano = require('./routes/piano')

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// routes
app.use('/piano', piano)

app.listen(8080, (req, res) => {
  console.log("server on port 8080")
})