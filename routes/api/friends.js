const router = require('express').Router()
const Users = require("../../models/users")

router.get('/', async (req, res) => {
    // let friends = []; // Initialize to avoid reference errors
    try {
        // Fetch all user names. Note: Ensure your schema field is 'user_name'. If it's 'userName', adjust accordingly.
        const friends = await Users.find().select('user_name -_id')
        console.log(friends)
        res.send("friends")
        // res.send(friends); // Send response inside try block to ensure it's only sent when data fetch is successful
    } catch (e) {
        res.status(500).json({error: e.message});
    }
})

router.delete("/:user_name/:id", async (req, res) => {
    try {
        const { user_name, id } = req.params;
        console.log( user_name, id)
        // Update the document: pull (remove) the friend's ID from the friends array
        const result = await Users.updateOne(
            { user_name: user_name }, // Find the user by user_name
            { $pull: { friends: id } } // Pull (remove) the friend's ID from the friends array
        );
        
        // Check if the document was found and updated
        if(result.modifiedCount === 0) {
            return res.status(404).json({ message: "User not found or friend's ID not in list." });
        }
        
        res.json({ message: "Friend removed successfully." });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


module.exports = router