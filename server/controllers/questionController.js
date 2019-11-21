const Question = require('../models/question')
const User = require('../models/user')

class QuestionController {

    static readAll (req,res,next) {
        Question.find({}).populate('userId').populate('answers')
            .then(function (ques) {
                res.status(200).json(ques)
            })
            .catch(next)
    }

    static readMe (req,res,next) {
        let userId = req.decoded.id
        
        Question.find({userId: userId})
            .then(function (questions) {
                res.status(200).json(questions)
            })
            .catch(next)
    }

    static readSingle(req,res,next) {
        let questionId = req.params.questionId
        console.log(questionId)
        Question.findOne({_id: questionId}).populate('answers')
            .then(function(question) {
                console.log(question)
                res.status(200).json(question)
            })
            .catch(next)
    }

    static create (req,res,next) {
        let userId = req.decoded.id
        let { title, description } = req.body
        Question.create({
            title: title,
            description: description,
            userId: userId
        })
        .then(function (ques) {
            res.status(201).json({question: ques, message: 'Your question has been post'})
        })
        .catch(next)
    }

    static updateQuestion (req,res,next) {
       
        let id = req.params.userId
        let { title, description } = req.body
        Question.updateOne({_id: id}, {title, description}, {omitUndefined: true})
            .then(function () {
                res.status(202).json({message: 'Your Question has been updated'})
            })
            .catch(next)
    }

    static upVote (req,res,next) {
        let id = req.params.questionId
        let userId = req.decoded.id
        let updatedQuestion;
        Question.findOne({_id: id})
            .then(function (question) {

                let userVote = false;
                question.upVote.forEach(function (el) {
                    if (el == userId) {
                        userVote = true
                    }
                })
                if (userVote == false) {
                    return Question.updateOne({_id: id},{$push: {upVote: userId}},{new: true})
                        .then(function (question) {
                            updatedQuestion = question
                            return Question.updateOne({_id: id},{$pull: {downVote: userId}}, {new:true})
                                .then(function (question) {
                                    res.status(202).json({updatedQuestion,message: 'You Up Vote this question'})
                                })
                        })
                }else {
                    next({status: 400, message: 'You already upvote this question'})
                }
            })
    }

    static downVote (req,res,next) {
        let id = req.params.questionId
        let userId = req.decoded.id
        let updatedQuestion;
        Question.findOne({_id: id})
            .then(function (question) {
                let userVote = false;
                question.downVote.forEach(function (el) {
                    if (el == userId) {
                        userVote = true
                    }
                })
                if (userVote == false) {
                     return Question.updateOne({_id: id}, {$push: {downVote: userId}}, {new:true})
                        .then(function (question) {
                            updatedQuestion = question
                            return Question.updateOne({_id: id}, {$pull: {upVote: userId}}, {new:true})
                                .then(function (question) {
                                    res.status(202).json({updatedQuestion,message: 'You down vote this question'})
                                }) 
                        })
                }else {
                    next({status: 400, message: 'You already vote this question'})
                }
            })

    }

    static delete (req,res,next) {
        console.log('masuk controller')
        let id = req.params.questionId
        Question.deleteOne({_id: id})
            .then(function (question) {
                res.status(200).json({message: 'Your question has been deleted'})
            })
            .catch(next)
    }


}


module.exports = QuestionController
