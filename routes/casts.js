const express = require('express')
const router = express.Router({ mergeParams: true })
const { Venues, Cast } = require('../db/schema')


//SHOW ALL
router.get('/', (req, res) => {
    Venues.findById(req.params.venueId)
        .then((venue) => {
            const attraction = venue.attractions.id(req.params.attractionId)
            res.render('casts/index', {
                attraction: attraction,
                venueId: req.params.venueId
            })
        })
    })

//NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
    res.render('casts/new', {
        venueId: req.params.venueId,
        attractionId: req.params.attractionId
    })
})     

//SHOW ONE
router.get('/:id', (req, res) => {
    Venues.findById(req.params.venueId)
        .then((venues) => {
            res.render('casts/show', {
                venueId: req.params.venueId,
                attraction: venues.attractions.id(req.params.id),
                castId: req.params.castId
            })
        })
    })

//EDIT, RENDER EDIT ONE
router.get('/:id/edit', (req, res) => {
    Venues.findById(req.params.venueId)
        .then((venues) => {
            res.render('attractions/edit', {
                venueId: req.params.venueId,
                attraction: venues.attractions.id(req.params.id)
            })
        })
})

//CREATE
router.post('/', (req, res) => {
    const newCast = new Cast(req.body)
    Venues.findById(req.params.venueId)
        .then((venue) => {
            venue.attraction.casts.push(newCast)
            return venue.save()
        })
    .then((venue) => {
        res.redirect(`/venues/${req.params.venueId}/attractions/${req.params.attractionId}/casts`)
    })
})


//Update
router.put('/:id', (req, res) => {
    Venues.findById(req.params.venueId)
    .then((venue) => {
        venue.attractions.id(req.params.id).set(req.body)
        return venue.save()
    })
      .then(() => { 
        res.redirect(`/venues/${req.params.venueId}/attractions/${req.params.id}/casts/${req.params.id}`)
    })
})


//DELETE
router.delete('/:id', (req, res) => {
    Venues.findById(req.params.venueId)
        .then((venue) => {
            venue.attractions.remove(req.params.id)
            return venue.save()
        })
        .then (() => {
            res.redirect(`/venues/${req.params.venueId}/attractions`)
        })
    })






module.exports = router