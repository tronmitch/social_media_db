const reactionsSchema  = require('./reactions')
const {Schema, model} = require('mongoose')

const thoughtsSchema = new Schema(
    {
     "thought_text":{
        type: String,
        required: true,
        minlength: [3, 'Thought must be at least 2 characters long'],
        maxlength: [110, 'Thouhgt must be less that 200 characters']
     },
     "user_name": {
        type: String,
        required: true,
     },
     "createAt": {
        type: Date,
        required: false,
        max_length: 50
     },
    //  "reactions": reactionsSchema
    },
    {
        toJSON: {
            getters: true
        }
    }
)

thoughtsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false, // Exclude __v in output
    transform: function (doc, ret) { delete ret._id; } // Exclude _id from output
  });

// Virtual to get reaction count
// thoughtsSchema.virtual('reactions_count').get(function(){
//     return this.reactions.length
// })

// // Virtual to to get Date
// thoughtsSchema.virtual('created_date').get(function(){
//     return formatDate(this.create)
// })


const Thought =  model('thought', thoughtsSchema)


// Thought.deleteMany({}).then(resul=> console.log ('Deleted Thought table'))

// Thought.create(
//     [
//         {
//             "thought_text": "Congrats on the new snowmobile",
//             "user_name": "Stockton",
//             "id": "6600ef0a20409424c0cb4f57"
//         },
//         {
//             "thought_text": "I thought you meant of the things we eat",
//             "user_name": "Bo",
//             "id": "660101ae28aef25080ea6236"
//         },
//         {
//             "thought_text": "taasdf",
//             "user_name": "Bo",
//             "id": "66010351135ba2267ffe1999"
//         },
//         {
//             "thought_text": "taasdf",
//             "user_name": "Bo",
//             "id": "660103a478f0b76ff76b2a6e"
//         }
//     ]
//   ).then(result => console.log('Created new document', result))
//   .catch(err => console.error(err))

 module.exports = Thought


