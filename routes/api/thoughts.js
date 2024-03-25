const router = require('express').Router()
const Thought = require('../../models/thoughts')
const User = require("../../models/users")

router.get('/', async(req, res) => {
    try{
        const thoughts = await Thought.find();
        res.send(thoughts)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/:id', async(req,res) =>{
try{
    const thought = await Thought.find({ _id: req.params.id})
    res.send(thought)
}catch (e){
    res.status(500).json({message: e.message})
}
})

router.post('/:user_name', async (req, res) => {
    let newThought;
    try {
        // Create a new thought
        newThought = await Thought.create({
            user_name: req.params.user_name,
            thought_text: req.body.thought_text,
        });

        // Update the user's thoughts array
        await User.updateOne(
            { user_name: req.params.user_name },
            { $push: { thoughts: newThought._id } } // Assuming you want to push the thought's ID
        );
        res.json(newThought); // Send the newly created thought as response
    } catch (e) {
        res.status(500).json({
            Error: e.message,
            message: "Could not create new thought or update the user"
        });
    }
});


router.put("/:id", async(req, res) =>{
    try{
        const newThought = await Thought.updateOne(
            {_id: req.params.id},
            {
                $set:{
                    "user_name": req.body.user_name,
                    "thought_text": req.body.thought_text,
                    "reations": req.body.reaction
                }
            }
        )
            res.send(newThought)
    }catch (e){
        res.status(500).json({message: e.message})
    }
})

router.delete('/:id', async(req,res) =>{
    try{
        const thought = await Thought.deleteOne({ _id: req.params.id})
        allThoughts = await Thought.find()
        res.send(`Successfully deleted ${thought} /n${allThoughts}` )
    }catch (e){
        res.status(500).json({message: e.message})
    }
    })

module.exports = router


