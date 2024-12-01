const express = require('express')
const usersController = require('../controllers/user')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({message: 'root for users api'})
})
router.post('/add', usersController.addUser)
router.post('/login', usersController.loginUser)

module.exports = router