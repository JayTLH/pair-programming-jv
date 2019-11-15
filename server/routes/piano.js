const express = require('express')
const router = express.Router()
const fs = require('fs')

const record = require('../data/record')

router.get('/', (req, res) => {
  res.send(record)
})

router.post('/', (req, res) => {
  fs.writeFile('./data/record.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log("File saved!")
  })

  res.status(201).send(req.body)
})

module.exports = router