var express = require('express')
var router = express.Router()
const { Venues } = require('../db/schema')

//SHOW ALL
router.get('/', (req, res) => {
  Venues.find()
    .then((Venues) => {
  console.log('Found Venues', Venues)
  res.render('venues/index', { Venues })
  })
})

//NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
  res.render('venues/new')
})

//SHOW, SHOW ONE



//EDIT, RENDER EDIT FORM


//CREATE


//UPDATE


//DELETE
  


module.exports = router;
