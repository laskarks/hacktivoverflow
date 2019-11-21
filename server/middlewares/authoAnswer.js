const Answer = require('../models/answer')

module.exports = (req,res,next) => {
    
    Answer.findOne({_id: req.params.answerId})
        .then(function (answer) {
            if (answer.userId === req.decoded.id) {
                next()
            }else {
                next({status: 403,message: 'You dont have have authorize to do that'})
            }
        })
        .catch(next)
 
}