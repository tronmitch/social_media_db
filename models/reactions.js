const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(), // Sets default value to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280, // 280 character maximum
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Sets default value to the current timestamp
        get: formatDate, // Assuming formatDate is a function to format the timestamp
    },
}, {
    toJSON: {
        getters: true, // Enable getters so the format method is applied
    },
    id: false, // Disable the virtual `id` property
});

// Example formatDate function to format the createdAt date
// This should be adjusted according to how you wish to format the dates
function formatDate(date) {
    return date.toLocaleString('en-US', { timeZone: 'UTC' }); // Formats date as a string in the specified locale
}

module.exports = reactionsSchema;