const router = require('express').Router()
const usersRoute = require('./users')
const thoughtsRoute = require('./thoughts')
const friendsRoute = require('./friends')

router.use('/users', usersRoute)
router.use('/thoughts', thoughtsRoute)
router.use('/friends', friendsRoute)

module.exports = router;

