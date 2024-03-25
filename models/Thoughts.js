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
    //  "create_date": {
    //     type: Date,
    //     required: false,
    //     max_length: 50
    //  },
    //  "reactions": reactionsSchema
    },
    {
        toJSON: {
            getters: true
        }
    }
)

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
//     {
//         thought_text: "Congrats on the new snowmobile",
//         user_name: "Stockton",
//         create_date: "March 10th, 2024"
//       },
//       {
//         thought_text: "Can you kick it",
//         user_name: "Stockton",
//         create_date: "March 10th, 2024"  
//       }
//   ).then(result => console.log('Created new document', result))
//   .catch(err => console.error(err))

 module.exports = Thought


