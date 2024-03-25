const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        "user_name": {
            type: String,
            unique: true,
            required: true,
            trim: true,
            max_length: 50,
        },
        "thoughts": [{type: Schema.Types.ObjectId, ref: 'Thought'}],
        "friends": [{type: Schema.Types.ObjectId, ref: 'User'}],
        "email":{
            type: String,
            required: true,
            unique: true,
            match: '/^S+@\S+\.\S+$/',
        }

    },
    {
        toJSON: {
            getters: true
        }
    }
)

//Virtual for friend count
userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('user', userSchema)
module.exports  = User;