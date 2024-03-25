const router = require('express').Router()
const User = require('../../models/users')

//get all users
router.get('/', async (req, res) => {
   try {
        const users = await User.find();
        res.send(users)
   }catch (err) {
    res.status(500).json({message: err.message})
   }
})

//get one user
router.get('/:user_name', async (req, res) => {
   try {
        const user = await User.find({user_name: req.params.user_name});
        res.send(user)
   }catch (err) {
    res.status(500).json({message: err.message})
   }
})

//add a user
router.post('/', async (req, res) => {
  try{
   const newUser =await User.create(
      {
         "user_name": req.body.user_name,
         "thoughts": req.body.thoughts,
         "friends": req.body.friends,
         "email": req.body.email
      }
   )
   res.send(`successfully added user, ${newUser.user_name}`)
  } catch(err) {
   res.status(500).json({message: err.message})
  }

})

//udate a user
router.put('/:user_name', async (req,res) =>
{
   try{
      const updatedUser = await User.updateOne(
         { user_name: req.params.user_name },
         {
            $set: {
               "user_name": req.body.user_name,
               "thoughts": req.body.thoughts,
               "friends": req.body.friends,
               "email": req.body.email
            }
         }
         )
      res.json({message: `${req.params.user_name} Updated successfully`})
   }catch (err) {
      res.status(500).json({message: err.message})
   }
})

//delete a user
router.delete('/:user_name', async (req,res) =>
{
   try{
      const updatedUser = await User.deleteOne(
         { user_name: req.params.user_name }
         )
      res.json({message: `${req.params.user_name} Deleted successfully`})
   }catch (err) {
      res.status(500).json({message: err.message})
   }
})

module.exports = router