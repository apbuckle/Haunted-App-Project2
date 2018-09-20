const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CastSchema = new Schema ({
    name: String,
    favoriteHorrorMovie: String,
    yearsOfExperience: Number,
    costume: String,
    photoUrl: String

})

const AttractionSchema = new Schema ({
    name: String,
    description: String,
    price: Number,
    cast: [CastSchema]
})

const VenueSchema = new Schema ({
    name: String,
    city: String,
    age: Number,
    attractions: [AttractionSchema],
})

const CastModel = mongoose.model('Cast', CastSchema)
const AttractionModel = mongoose.model('Attractions', AttractionSchema)
const VenueModel = mongoose.model('Venues', VenueSchema)

module.exports = {
    Cast: CastModel,
    Attractions: AttractionModel,
    Venues: VenueModel
}