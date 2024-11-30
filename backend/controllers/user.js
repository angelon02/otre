const User = require('../models/users')

module.exports = {
  
  addUser: (req, res) => {
    User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
      .then(r => res.json(r))
  },

  loginUser: (req, res) => {
    User.findOne({
      username: req.body.username
    })
      .then(r => {
        if (r) res.json(r)
        else res.json({"error": "user not found"})
      })
      .catch(r => res.json({"error": "error"}))
  }
}