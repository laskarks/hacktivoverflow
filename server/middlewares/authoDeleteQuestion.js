const Question = require('../models/question')

module.exports = (req,res,next) => {
    let id = req.params.questionId
    Question.findOne({_id: id})
        .then(function (question) {
           
            if (question.userId == req.decoded.id) {
                next()
            }else {
                next({status: 403,message: 'You dont have have authorize to do that'})
            }
        })
        .catch(next)
 
}