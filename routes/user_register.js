
const express = require('express')
const bodyParser = require('body-parser')
const userRegister = require('../controllers/user.controller')
const router = express.Router()



router.post('/register', userRegister.register)

module.exports = router