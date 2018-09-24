const express = require('express')
const router = express.Router({ mergeParams: true })
const { Venues, Attractions, Cast } = require('../db/schema')


//SHOW ALL
router.get('/', (req, res) => {
    Attractions.findById(req.params.attractionId)
        .then((attraction) => {
            res.render('casts/index', {
                attractionId: req.params.attractionId,
        
                
                

            })
        })
    })

       












module.exports = router