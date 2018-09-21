const express = require('express')
const router = express.Router({ mergeParams: true })
const { Venues, Attractions} = require('../db/schema')


//SHOW ALL
router.get('/', (req, res) => {
    Venues.findById(req.params.venueId)
        .then((venues) => {
            console.log("found attractions", venues)
            res.render('attractions/index', {
                venueId: req.params.venueId,
                attractions: venues.attractions
            })
        })
})

//NEW, RENDER NEW FORM


//SHOW ONE
router.get('/:id', (req, res) => {
    Venues.findById(req.params.venueId)
        .then((venues) => {
            res.render('attractions/show', {
                venueId: req.params.venueId,
                attraction: venues.attractions.id(req.params.id)
            })
        })
    })

//EDIT, RENDER EDIT ONE


//CREATE


//UPDATE


//DELETE


module.exports = router