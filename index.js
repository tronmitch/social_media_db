const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const routes = require('./routes')
app.use('/', routes)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Listening at https:\local.host.${PORT}`))
