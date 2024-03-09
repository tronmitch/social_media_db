const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Friends route")
})

module.exports = router