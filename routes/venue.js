var express = require('express')
var router = express.Router()
const { Venue } = require('../db/schema')

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('venue/index', { Venue })
})


  


module.exports = router;
