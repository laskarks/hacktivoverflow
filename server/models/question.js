const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Answer'
    }],
    upVote: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    downVote: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }]
})

const question = mongoose.model('Question',questionSchema)

module.exports = question