const express = require('express')
const mongoose = require('mongoose')
const MONGO_URI = 'mongodb://localhost:27017/social_db'
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3001
// const dotenv = require('dotenv').config()


app.use(express.json())

app.use('/', routes)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Listening at https://local.host.${PORT}`))
  })
  .catch(err => console.error('Could not connect to MongoDB', err));


