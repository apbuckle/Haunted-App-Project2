require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')
const { Venues, Attractions, Cast } = Schema

const Freddy = new Cast({ name: 'Fred', favoriteHorrorMovie: 'Nightmare on Elm Street', years: 34, costume: 'Fred Krueger' })
const Michael = new Cast({ name: 'Michael', favoriteHorrorMovie: 'Halloween', years: 39, costume: 'Michael Myers'})
const Jason = new Cast({name: 'Jason', favoriteHorrorMovie: 'Friday the 13th', years: 38, costume: 'Jason Voorhees' })
const MadMax = new Cast({name: 'Max', favoriteHorrorMovie: 'MadMax', years: 39, costume: 'Max'})
const Carrie = new Cast({name: 'Carrie White', favoriteHorrorMovie: 'Carrie', years: 42, costume: 'Bloddy Prom Dress'})
const SideShowBob = new Cast({name: 'Sideshow Bob' , favoriteHorrorMovie: 'Phantom of the Opera', years: 30, costume: 'Clown Suit'})
const TheSimpsons = new Cast({name: 'Homer, Marge, Lisa, Bart, Maggie', favoriteHorrorMovie: 'Treehouse of Horrors', years: 38, costume: 'Glowing mutated outfits'})
const PickleRick = new Cast({name: 'Rick', favoriteHorrorMovie: 'Event Horizon', years: 4, costume: 'Pickle Rick'})
const BelcherFamily = new Cast({name: 'Belchers', favoriteHorrorMovie: 'none', years: 8, costumes: 'Season 3 Halloween episode costumes'})
const Creeper = new Cast({name: 'Creeper', favoriteHorrorMovie: 'Jeepers Creepers', years: 17, costume: 'Winged Scarecrow'})
const CandyMan = new Cast({name: 'Candy Man', favoriteHorrorMovie: 'Candy Man', years: 28, costume: 'Tattered coat and hook hand'})
const OneEyeWillie = new Cast({name: 'One Eye Willie', favoriteHorrorMovie: 'The Goonies', years: 33, costume: 'Tattered pirate outfit'})
const Chucky = new Cast({name: 'Chucky', favoriteHorrorMovie: 'Childs play', years: 30, costume: 'Buddy Doll outfit with butcher a knife'})

const SlasherHouse = new Attractions({name: 'Slasher House', description: 'Can you survive the classic slasher villians?', cast:[Jason, Freddy, Michael] })
const TerrorRoad = new Attractions({name: 'Terror Road', description: 'Do you dare cross this road?', cast: [MadMax]})
const BloodyMaryGoAround = new Attractions({name: 'Bloody Mary-G0-Round', description: 'And you thought Carrie was bloody!?', cast:[Carrie]})
const NuclearMutants = new Attractions({name: 'Nuclear Mutants', description: 'Mr. Burns finally blew up Springfield, but something has survived!', cast:[TheSimpsons]})
const SideShowMaze = new Attractions ({name: 'Sideshow Bob Maze', description: 'Sideshow Bob has escaped and seeks revenge. Can you escape his deranged maze?', cast:[SideShowBob]})
const Portals = new Attractions({name: 'Portals', description: 'Are you prepared for an adventure with Rick?', cast:[PickleRick]})
const BobsBurgerPhoto = new Attractions({name: 'Photo Shoot With The Belcher Family', description: 'Gather with the Belchers in their Halloween costumes for a photo opt.', cast:[BelcherFamily]})
const SweetDreams = new Attractions({name: 'Sweet Terror Night', description: 'The Creep and Candy Man have come together to rain terror on this special night.', cast:[Creeper, CandyMan]})
const OneEyePhoto = new Attractions({name: 'Photo Shoot with One Eye Willie', description: 'Gather for a photo with a favorite childhood character.', cast:[OneEyeWillie]})
const PlayGround = new Attractions({name: 'Chuckys Playground', description: 'Chucky is back and ready for a play date!', cast:[Chucky]})

const TreehouseOfHorror = new Venues({ name: 'Treehouse of Horror', city: 'Springfield', age: 14, price: 35, attractions:[NuclearMutants, SideShowMaze, Portals, BobsBurgerPhoto]})
const NeatherWorld = new Venues({ name: 'Neather World', city: 'Atlanta', age: 21, price: 40, attractions:[SlasherHouse, TerrorRoad, SweetDreams]})
const CarnyVille = new Venues({ name: 'Six Flags', city: 'Douglasville', age: 18, price: 25, attractions:[BloodyMaryGoAround, OneEyePhoto, PlayGround]})



Venues.deleteMany()
    .then (() => {
        return Venues.insertMany([TreehouseOfHorror, NeatherWorld, CarnyVille])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })