const Question = require('../models/question')

module.exports = (req,res,next) => {
    console.log('masuk autho')
    let id = req.params.questionId
    console.log(id,'-------this is id')
    Question.findOne({_id: id})
        .then(function (question) {
            console.log(question,'---------------------')
            if (question.userId == req.decoded.id) {
                next()
            }else {
                next({status: 403,message: 'You dont have have authorize to do that'})
            }
        })
        .catch(next)
 
}