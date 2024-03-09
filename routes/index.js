const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)
router.use((req, res) => res.send('Wrong route! Use /api/users or api/friends/ or api/thoughts'))

module.exports = router