const mongoose = require('mongoose')


const answerSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const answer = mongoose.model('Answer', answerSchema)

module.exports = answer