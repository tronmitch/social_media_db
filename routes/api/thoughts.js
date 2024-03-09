const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Thoughts route")
})

module.exports = router