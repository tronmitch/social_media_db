const {Schema, model} = require('mongoose')

const thoughtsSchema = new Schema(
    {
     "thoughtText":{
        type: String,
        required: true,
        max_length: 200,
     },
     "user_name": {
        type: String,
        required: true,
        max_length: 50,
     },
     "createdDate": {
        type: String,
        required: true,
        max_length: 50
     }  
    },
    {
        toJSON: {
            getters: true
        }

    }
)


const Thought =  model('thought', thoughtsSchema)
model.export = Thought


