var express = require('express')
var router = express.Router()
const { Venues } = require('../db/schema')

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('venues/index', { Venues })
})


  


module.exports = router;
