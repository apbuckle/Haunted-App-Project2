require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')
const { Venues, Attraction, Cast } = Schema

const Freddy = new Cast({ name: 'Fred', favoriteHorrorMovie: 'Nightmare on Elm Street', yearsScaring: '3', costume: 'Fred Krueger' })
const Jason = new Cast({name: 'Jason', favoriteHorrorMovie: 'Friday the 13th', yearsScaring: '5', costume: 'Jason Voorhees' })
const MadMax = new Cast({name: 'Max', favoriteHorrorMovie: 'Duel', yearsScaring: '8', costume: 'pycho driver'})

const ZombieHouse = new Attraction({name: 'Zombie House', description: 'When you thought you could escape the living dead, they show up in your home', price: "$10", cast:[Jason, Freddy] })
const TerrorRoad = new Attraction({name: 'Terror Road', description: 'Do you dare cross this road?', price: "$14", cast: [MadMax]})

const NeatherWorld = new Venues({ name: 'Neather World', city: 'Atlanta', age: '18+', attractions:[ZombieHouse, TerrorRoad]})

Venues.deleteMany()
    .then (() => {
        return Venues.insertMany([NeatherWorld])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })
