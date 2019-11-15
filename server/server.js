const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {

  res.send("hello")
})

app.post('/', (req, res) => {
  // let postBody = req.body
  let postBody = {name: "Jason"}
  fs.writeFile('./data/song.json', JSON.stringify(postBody), (err) => {
    if (err) throw err
  })

  res.send("posted")
})

app.listen(8080, (req, res) => {
  console.log("server on port 8080")
})