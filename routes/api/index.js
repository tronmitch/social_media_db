const router = require('express').Router()
const usersRoute = require('./users')
const thoughtsRoute = require('./thoughts')
const friendsRoute = require('./friends')
const reactionsRoute = require('./reactions')


router.use('/users', usersRoute)
router.use('/thoughts', thoughtsRoute)
router.use('/friends', friendsRoute)
router.use('/reactions', reactionsRoute)

module.exports = router;

