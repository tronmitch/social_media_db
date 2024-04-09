const router = require('express').Router()
const { models } = require('mongoose');
// const Reactions = require('../../models/reactions')
const Users = require('../../models/users')

router.delete('/:thought_id/:reaction_id', async (req, res)=>{
    try{
        const {thought_id, reaction_id} = req.params;
        console.log(thought_id, reaction_id)

        const result = await Users.updateOne(
           { thought_id: thought_id  },
           {$pull: {reaction_id: reaction_id}}
           )
        res.json({message: `${req.params.user_name} Deleted successfully`})
     }catch (err) {
        res.status(500).json({message: err.message})
     }
})

module.exports = router;