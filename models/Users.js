const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        "user_name": {
            type: String,
            required: true,
            max_length: 50,
        },
        "thoughts": {
            type: [String],
            required: false,
        },
        "friends": {
            type: [String],
            required: false,
        }

    },
    {
        toJSON: {
            getters: true
        }

    }
)
const User = model('user', userSchema)
module.exports  = User;