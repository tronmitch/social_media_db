const mongoose = require('mongoose')
const Thought = require('../models/thoughts')

mongoose.connect(`mongodb://localhost:2017/myapp`, {})

Thought.create(
    {
        thought_text: "Congrats on the new snowmobile",
        user_name: "Stockton",
        create_date: "March 10th, 2024"
      },
      {
        thought_text: "Can you kick it",
        user_name: "Stockton",
        create_date: "March 10th, 2024"  
      }
  ).then(result => console.log('Created new document', result))
  .catch(err => console.error(err))