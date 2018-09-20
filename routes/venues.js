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
router.get('/:id', (req, res) => {
  Venues.findById(req.params.id)
    .then((Venues) => {
      res.render('venues/show', { Venues })
    })
})


//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
  Venues.findById(req.params.id)
    .then((Venues) => {
      res.render('venues/edit', { Venues })
    })
})


//CREATE
router.post('/', (req, res) => {
  Venues.create(req.body)
    .then((Venues) => {
      res.redirect(`venues/${venues._id}`)
    })
})

//UPDATE


//DELETE
  


module.exports = router;
