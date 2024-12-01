const User = require('../models/user')

module.exports = {
  
  addUser: (req, res) => {
    User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      ruolo: req.body.ruolo
    })
      .then(r => res.json(r))
  },

  loginUser: (req, res) => {
    User.findOne({
      username: req.body.username,
      password: req.body.password
    })
      .then(r => {
        if (r) res.json(r)
        else res.json({"error": "user not found"})
      })
      .catch(r => res.json({"error": "error"}))
  }
}