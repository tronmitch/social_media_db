const {Schema, model} = require("mongoose")

const friendsSchema = new Schema({
    'friend_name' : {
        type: String,
        max_length: 50,
    }
})

