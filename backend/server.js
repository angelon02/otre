const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect("mongodb+srv://angelonetti990:<db_password>@cluster0.ikzrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const db = mongoose.connection
db.once("open", () => {
  console.log("Connesso al DB")
  app.listen(3000, () => {
    console.log("App in ascolto")
  })
})

const router = require('./routes/api')

app.use(cors())
app.use(express.json())

app.use('/api', router)