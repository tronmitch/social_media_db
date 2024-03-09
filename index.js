const express = require('express')
const app = express()
const routes = require('./routes')
const dotenv = require('dotenv').config()
app.use('/api', routes)

app.get('/', (req, res) =>{

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Listening at https:\local.host.${PORT}`))
