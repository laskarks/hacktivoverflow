const Answer = require('../models/answer')
const User = require('../models/user')
const Question = require('../models/question')

class AnswerController {
    
    static readAll (req,res,next) {
        Answer.find({})
            .then(function (answer) {
                res.status(200).json({answer})
            })
            .then(next)
    }

    static create(req,res,next) {
        let userId = req.decoded.id
        let questionId = req.params.questionId
        Answer.create({
            description: req.body.description,
            questionId: questionId,
            userId: userId
        })
        .then(function (answer) {
            return Question.updateOne({id: questionId}, {$push: {answers: answer}})
                .then(function (question) {
                    res.status(201).json({message: 'Your answer has been post'})
                })
        })
        .catch(next)
    }

    static delete(req,res,next) {
        let userId = req.decoded.id
        let questionId = req.params.questionId
        let answerId = req.params.answerId
        let deletedAnswer;
        Answer.findOneAndDelete({id: answerId})
            .then(function (answer) {
                deletedAnswer = answer
                return Question.updateOne({id: questionId}, {$pull: {answers: deletedAnswer}})
                    .then(function () {
                        res.status(202).json({message: 'Your answer has been deleted'})
                    })
            })
            .catch(next)
    };


}


module.exports = AnswerController