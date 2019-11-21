const userRouter = require('./userRouter')
const questionRouter = require('./questionRouter')
const express = require('express')
const Router = express.Router()
const answerrouter = require('./answerRouter')

Router.use('/users', userRouter)
Router.use('/questions', questionRouter)
Router.use('/answers', answerrouter)

module.exports = Router
