const questionController = require('../controllers/questionController')
const express = require('express')
const Router = express.Router()
const auth = require('../middlewares/auth')
const autho = require('../middlewares/autho')
const authoDelete = require('../middlewares/authoDeleteQuestion')

Router.get('/', auth,questionController.readAll)
Router.get('/me', auth, questionController.readMe)
Router.get('/:questionId',auth,questionController.readSingle)
Router.post('/', auth,questionController.create)
Router.delete('/:questionId', auth,authoDelete,questionController.delete)
Router.put('/:questionId', auth,autho,questionController.updateQuestion)
Router.patch('/:questionId/upvote', auth,questionController.upVote)
Router.patch('/:questionId/downvote', auth,questionController.downVote)


module.exports = Router