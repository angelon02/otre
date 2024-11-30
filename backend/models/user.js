const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  ruolo: String
})

module.exports = mongoose.model("User", userSchema)