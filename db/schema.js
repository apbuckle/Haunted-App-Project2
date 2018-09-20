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
    scareFactor: Number,
    attractions: [AttractionSchema],
})

const CastModel = mongoose.model('Cast', CastSchema)
const AttractionModel = mongoose.model('Attraction', AttractionSchema)
const VenueModel = mongoose.model('Venue', VenueSchema)

module.exports = {
    Cast: CastModel,
    Attraction: AttractionModel,
    Venue: VenueModel
}
