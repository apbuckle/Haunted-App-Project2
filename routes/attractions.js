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
router.get('/new', (req, res) => {
    res.render('attractions/new', {
        venueId: req.params.venueId
    })
})


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
router.post('/', (req, res) => {
    const newAttraction = new Attraction(req.body)
    Venues.findById(req.params.venueId)
        .then((venue) => {
            venue.attractions.push(newAttraction)
            return venue.save()
        })
    .then((venue) => {
        res.redirect(`/venues/${req.params.venue._id}/attractions`)
})
})



//UPDATE


//DELETE
// router.delete('/:id', (req, res) => {
//     Venues.findByIdAndRemove(req.params.venuesId)
//         .then(() => {
//             res.redirect(`/venues/${req.params.venue._id}/attractions`)
//         })
// })


module.exports = router